import React, { useState, useEffect } from 'react';
import { Table, Tag } from 'antd';




function User(props) {
    const columns = [
        {
            title: '用户名',
            dataIndex: 'user',
            key: 'user',
        },
        {
            title: '密码',
            dataIndex: 'password',
            key: 'password',
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '用户ID',
            dataIndex: 'user_id',
            key: 'user_id',
        },
        {
            title: '操作',
            render(v) {
                return <Tag onClick={() => joinBlack(v)}>加入黑名单</Tag>
            },
        }
    ];
    const [dataSource, setDataSource] = useState([]);
    const { upHttp } = React.crm;
    useEffect(() => {
        upHttp(['get', '/web/userlist'], data => {
            setDataSource(data.data);
        })
    }, [dataSource,upHttp]);
    let joinBlack = (item) => {
        let { user_id } = item;
        upHttp(['put', '/web/black', { user_id }], data => {
            setDataSource(data.data);
        })
    }
    return <Table rowKey={v => v.user_id} pagination={false} dataSource={dataSource} columns={columns} />
}

export default User;