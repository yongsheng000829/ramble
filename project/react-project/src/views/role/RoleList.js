
import React, { useState, useEffect } from 'react';
import { Table, Tag } from 'antd';




export default props => {
    const columns = [
        {
            title: '角色',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'role_id',
            dataIndex: 'role_id',
            key: 'role_id',
        },
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '操作',
            render(v) {
                return <span>
                    <Tag onClick={() => del(v)}>删除</Tag>
                    <Tag onClick={() => props.history.push({ pathname: '/main/roleadd', state: v })}>编辑</Tag>
                </span>
            }
        }
    ];
    let del = (v) => {
        if (window.confirm('确定要删除吗？')) {
            let { role_id } = v;
            upHttp(['delete', '/crm/roledelete', { role_id }], data => {
                alert(data.msg);
                setDataSource(data.data);
            })
        }
    }
    const [dataSource, setDataSource] = useState([]);
    const { upHttp } = React.crm;
    useEffect(() => {
        upHttp(['get', '/crm/rolelist'], data => {
            setDataSource(data.data);
        })
    }, [null,upHttp]);
    return <div>
        <div style={{ marginBottom: '30px' }}><Tag onClick={() => props.history.push('/main/roleadd')}>添加角色</Tag></div>
        <Table rowKey={v => v.id} pagination={false} dataSource={dataSource} columns={columns} />
    </div>
}

