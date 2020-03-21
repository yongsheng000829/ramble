import React, { useState, useEffect } from 'react';
import { Button, Tree, Input } from 'antd';

const treeData = [
    {
        title: "职员管理",
        class: "职员管理",
        key: "sub1",
        children: [
            { title: "职员列表", key: "1" },
            { title: "添加职员", key: "2" }
        ]
    },
    {
        class: "用户管理",
        key: "sub3",
        title: "用户管理",
        children: [
            { title: "用户列表", key: "3" }
        ]
    },
    {
        class: "客服管理",
        key: "sub4",
        title: "客服管理",
        children: [
            { title: "意向列表", key: "4" },
            { title: "联系我们", key: "5" }
        ]
    },
    {
        class: "系统管理",
        key: "sub6",
        title: "系统管理",
        children: [
            { title: "角色列表", key: "6" },
            { title: "添加角色", key: "7" }
        ]
    },
    {
        class: "产品管理",
        key: "sub8",
        title: "产品管理",
        children: [
            { title: "产品列表", key: "8" },
            { title: "添加产品", key: "9" }
        ]
    },
    {
        class: "游记管理",
        key: "sub10",
        title: "游记管理",
        children: [
            { title: "游记列表", key: "10" },
            { title: "添加游记", key: "11" }
        ]
    }
]


export default props => {
    let { upHttp } = React.crm;
    let state = props.location.state;
    let [arr, setArr] = useState([]);
    if (state) {
        arr.length === 0 && upHttp(['post', '/role/rolemenu', { role_id: state.role_id }], data => {
            setArr(data.data.map(val => val.menu));
        }, [null, upHttp]);
    }
    let [role, setRole] = useState(state ? state.role : '');
    const onCheck = (checkedKeys) => {
        setArr(checkedKeys);
    };
    let submit = () => {
        arr = arr.filter(val => val.indexOf('sub') === -1);
        upHttp(['post', '/crm/roleadd', { role, arr }], (data) => {
            props.history.push('/main/role');
            alert(data.data);
        })
    }
    console.log(arr)
    return <div className='role_add_page'>
        <div className='role_top'>
            <span>角色名称：</span>
            <Input type="text" placeholder='请输入角色名称' value={role} onChange={e => setRole(e.target.value)} />
        </div>
        <Tree
            checkable
            defaultExpandAll={true}
            defaultCheckedKeys={arr}
            onCheck={onCheck}
            treeData={treeData}
        />
        <Button type='primary' onClick={submit}>确定</Button>
    </div>
}