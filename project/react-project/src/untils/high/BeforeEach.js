import React from 'react';

export default Com => {
    return props => {
        let token = window.localStorage.crmUser;
        let path = props.location.pathname;
        let arr = localStorage.menu ? JSON.parse(localStorage.menu) : [];
        if (!token) {
            props.history.push('/login');
            return null;
        }
        if (arr.includes(path) || path === '/main') {
            return <Com {...props} />
        }
        return <h1>你没有权限访问这个页面</h1>;
    }
}