import React, { useState, useEffect } from 'react';
import { Input, Select, Button, DatePicker } from 'antd';
import moment from 'moment';
const { Option } = Select;
const dateFormat = 'YYYY/MM/DD';

export default props => {
    const { upHttp } = React.crm;
    let time = new Date().toLocaleDateString();
    let state = props.location.state;
    const [selArr, setSelArr] = useState([]);
    const [user, setUser] = useState(state ? state.user : '');
    const [password, setPwd] = useState(state ? state.password : '');
    const [sex, setSex] = useState(state ? state.sex : '1');
    const [status, setStatus] = useState(state ? state.status : '1');
    const [role_id, setRole] = useState(state ? state.role_id : '请选择');
    const [createtime, setTime] = useState(state ? new Date().toLocaleDateString(state.createtime * 1) : time);
    useEffect(() => {
        upHttp(['get', '/crm/rolelist'], data => {
            setSelArr(data.data);
        })
    }, [null, upHttp]);
    let submit = () => {
        let obj = { user, password, sex, status, role_id, createtime };
        if (state) obj.user_id = state.user_id;
        let url = state ? '/crm/userreset' : '/crm/useradd';
        let method = state ? 'put' : 'post';
        upHttp([method, url, { obj }], data => {
            alert(data.msg);
            props.history.push('/main/staff');
        })
    }
    return <div className='staff_add'>
        <div>
            <span>用户名：</span>  <Input  type='text' value={user} onChange={e => setUser(e.target.value)} className='staff_txt' />
        </div>
        <div>
            <span>密码：</span>  <Input disabled={state ? true : false} type='password' value={password} onChange={e => setPwd(e.target.value)} className='staff_txt' />
        </div>
        <div>
            <span>性别：</span>
            <Select onChange={v => setSex(v)} value={sex}>
                <Option value='1'>男</Option>
                <Option value='2'>女</Option>
            </Select>
        </div>
        <div>
            <span>状态：</span>
            <Select value={status} onChange={v => setStatus(v)}>
                <Option value='1'>在职</Option>
                <Option value='2'>离职</Option>
            </Select>
        </div>
        <div>
            <span>入职时间：</span>
            <DatePicker value={moment(createtime, dateFormat)} format={dateFormat} onChange={(e, dateString) => setTime(dateString)} />
        </div>
        <div>
            <span>角色：</span>
            <Select value={role_id !== '请选择' ? role_id * 1 : role_id} onChange={v => setRole(v)}>
                {
                    selArr.map(v => <Option key={v.id} value={v.id}>{v.role}</Option>)
                }
            </Select>
        </div>
        <div>
            <Button type='primary' onClick={submit}>确定</Button>
        </div>
    </div>
}