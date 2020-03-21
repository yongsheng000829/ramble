import React, { Component, useState, useEffect } from 'react'
import { Layout, Menu } from 'antd';
import { NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


export default props => {
    let push = (path) => {
        props.history.push(path);
    }
    let [menuList, setMenuList] = useState([]);
    let user = localStorage.crmUser;
    const { upHttp } = React.crm;
    useEffect(() => {
        upHttp(['get', '/crm/menu'], (data) => {
            let arr = data.data.map(val => val.options.map(v => v.to));
            arr = [].concat.apply([], arr);
            localStorage.setItem('menu',JSON.stringify(arr));
            setMenuList(data.data);
        })
    }, []);
    let loginOut = () => {
        localStorage.removeItem('crmUser');
        upHttp(['get', '/login/out'], null, data => {
            alert(data.msg);
            props.history.push('/login');
        })
    }
    return <Layout>
        <Header className="header">
            <span>后台管理</span>
            {user ? <span><b>{user}</b> <span onClick={loginOut}>退出</span></span> : null}
        </Header>
        <Content style={{ padding: '0 50px' }}>
            <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                <Sider className="site-layout-background" width={200}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        // defaultOpenKeys={['1']}
                        style={{ height: '100%' }}
                    >
                        {
                            menuList.map(val => {
                                return <SubMenu
                                    key={val.key}
                                    title={
                                        <span>
                                            <NotificationOutlined />
                                            {val.class}
                                        </span>
                                    }
                                >
                                    {
                                        val.options.map(item => <Menu.Item onClick={() => push(item.to)} key={item.key}>{item.title}</Menu.Item>)
                                    }
                                </SubMenu>
                            })
                        }
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    <React.crm.RouteView routeData={props.routeData} />
                </Content>
            </Layout>
        </Content>
    </Layout>

}




