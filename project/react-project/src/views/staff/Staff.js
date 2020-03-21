
import React, { useState, useEffect } from 'react';
import { Table, Tag, Input, Select, Button } from 'antd';
const { Option } = Select;



export default props => {
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
            title: 'user_id',
            dataIndex: 'user_id',
            key: 'user_id',
        },
        {
            title: '性别',
            dataIndex: 'sex',
            key: 'sex',
            render(v) { return <span>{v === '1' ? '男' : '女'}</span> }
        },
        {
            title: '入职时间',
            dataIndex: 'intime',
            key: 'intime',
            render(v) { return <span>{new Date(v * 1).toLocaleDateString()}</span> }
        },
        {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            render(v) {
                return <span>{v === '1' ? '在职' : '离职'}</span>
            }
        },
        {
            title: '操作',
            render(v, value) {
                return <span>
                    <Tag onClick={() => props.history.push({ pathname: '/main/staffadd', state: value })}>查看</Tag>
                    <Tag onClick={() => joinBlack(value.user_id)}>删除</Tag>
                    <Tag onClick={() => props.history.push({ pathname: '/main/staffadd', state: value })}>编辑</Tag>
                </span>
            }
        }
    ];
    let joinBlack = (user_id) => {
        upHttp(['post', '/crm/blackuser', { user_id }], data => {
            setDataSource(() => data.data);
        })
    }
    const [dataSource, setDataSource] = useState([]); const { upHttp } = React.crm;
    const [user, setUser] = useState('');
    const [sex, setSex] = useState('1');
    let search = () => {
        upHttp(['post', '/crm/usersearch', { user, sex }], data => {
            setDataSource(data.data);
        })
    }
    useEffect(() => {
        upHttp(['get', '/crm/userlist'], data => {
            setDataSource(data.data);
        })
    }, [null, upHttp]);
    return <div>
        <div className='staff_search'>
            <Input type='text' value={user} placeholder='输入用户名进行搜索' onChange={e => setUser(e.target.value)} />
            <Select value={sex} onChange={v => setSex(v)}>
                <Option value='1'>男</Option>
                <Option value='2'>女</Option>
                <Option value=''>全部</Option>
            </Select>
            <Button type='primary' onClick={search}>搜索</Button>
        </div>
        <div className='bm'><Tag onClick={() => props.history.push('/main/staffadd')}>添加职员</Tag></div>
        <Table rowKey={v => v.user_id} pagination={false} dataSource={dataSource} columns={columns} />
    </div>
}

