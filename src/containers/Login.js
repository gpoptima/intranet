import React , {useState} from 'react';
import { Alert, Form, Input, Button, Checkbox } from 'antd';
import logo from '../multimedia/logo.svg';
import { Redirect } from 'react-router-dom';
import {LockOutlined,UserOutlined} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../actions/login';

function Login(props) {
  
   const error = useSelector(state => state.login.error)
   const authenticated = useSelector(state => state.login.authenticated)
   const loading = useSelector(state => state.login.loading)
   const message = useSelector(state => state.login.message)
   const dispatch = useDispatch();

   const user = JSON.parse(localStorage.getItem('@@auth_user'));

   if (user) {
       return <Redirect to='/app' />;
   }

   const onFinish = values => {
       dispatch(signin(values));
   };

   const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
   };



   return (
      <div>
         <Form 
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="login-content">
            <img  src={logo} alt="logo" className="login-logo" />
            {error ? (
               <Alert
                  style={{ marginBottom: '18px' }}
                  message={message}
                  type="error"
                  closable
                  showIcon
               />
            ) : null}
            <Form.Item
                 name="email"
                 rules={[{ required: true, message: 'Ingresa tu usuario' }]}>
                 <Input
                     prefix={<UserOutlined  style={{ color: 'rgba(0,0,0,.25)' }}/>}
                     placeholder="Usuario"
                  />
            </Form.Item>
            <Form.Item
               name="password"
               rules={[{ required: true, message: 'Ingresa tu contraseña' }]}>
               <Input
                     prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }}/>}
                     type="password"
                     placeholder="Contraseña"
                  />
            </Form.Item>
            <Form.Item className="login-actions">
               <Checkbox>Recordar</Checkbox>
               <a className="login-form-forgot" href="">
                  ¿Olvide mi contraseña?
                </a>
               <Button loading={loading} disabled={loading} type="primary" htmlType="submit" className="login-form-button">
                  Ingresar
                </Button>

            </Form.Item>
         </Form>
      </div>
   )
}

export default Login;
