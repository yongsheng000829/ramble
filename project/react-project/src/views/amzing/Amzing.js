import React, { useState, useEffect } from 'react';
import { Table } from 'antd';


const columns = [
    {
        title: 'person_id',
        dataIndex: 'person_id',
        key: 'person_id',
    },
    {
        title: 'user_id',
        dataIndex: 'user_id',
        key: 'user_id',
    },
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '日期',
        dataIndex: 'day',
        key: 'day',
    },
    {
        title: '城市',
        dataIndex: 'city',
        key: 'city',
    },
    {
        title: '人数',
        dataIndex: 'person',
        key: 'person',
    },
    {
        title: '提交日期',
        dataIndex: 'date',
        key: 'date',
        render: (tags, item) => (
            <span>{new Date(item.date * 1).toLocaleDateString()}</span>
        )
    }
];

export default props => {
    const [dataSource, setDataSource] = useState([]);
    const { upHttp } = React.crm;
    useEffect(() => {
        upHttp(['get', '/person/list'], data => {
            setDataSource(data.data);
        })
    }, [dataSource,upHttp]);
    return <Table rowKey={v => v.user_id} pagination={false} dataSource={dataSource} columns={columns} />
}