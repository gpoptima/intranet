import React,{useState} from 'react';
import '../styles/App.css';
import CountH from '../components/CountH'
import Error from '../components/Error'
import Autos from './Autos'
import NoMatch from '../components/NoMatch'
import { Layout, Menu, Breadcrumb,Tag,Badge} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined ,ClockCircleOutlined} from '@ant-design/icons';
import { Link, Switch, Route,useRouteMatch,Redirect} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { logout } from '../actions/app';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


function App(props)
{
  const {path, url} = useRouteMatch();
  const dispatch = useDispatch();
  
  const user = JSON.parse(localStorage.getItem('@@auth_user'));

   if (!user) {
       return <Redirect to='/login' />;
   }

  return (
   <Layout className='m-layout'>
        <Header >
          <div className='logo' />
          <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
            <Menu.Item key='1'>nav 1</Menu.Item>
            <Menu.Item key='2'>nav 2</Menu.Item>
            <Menu.Item key='3'>nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className='site-layout-background'>
            <Menu
              mode='inline'
             
              defaultOpenKeys={['sub1']}
              className='m-menu'
            >
              <SubMenu key='sub1' icon={<UserOutlined />} title='subnav 1'>
                <Menu.Item key='1'>
                  <Link to={`${path}/autos`}>Autos</Link>
                </Menu.Item>
                <Menu.Item key='2'>
                  <Link to={`${path}/count/Contador 1`}>Count</Link>
                </Menu.Item>
                <Menu.Item key='3'>
                  <Link to={`${path}/error`}>Error</Link>
                </Menu.Item>
                <Menu.Item key='4' onClick={()=>dispatch(logout())}>Logout</Menu.Item>
              </SubMenu>
              <SubMenu key='sub2' icon={<LaptopOutlined />} title='subnav 2'>
                <Menu.Item key='5'>option5</Menu.Item>
                <Menu.Item key='6'>option6</Menu.Item>
                <Menu.Item key='7'>option7</Menu.Item>
                <Menu.Item key='8'>option8</Menu.Item>
              </SubMenu>
              <SubMenu key='sub3' icon={<NotificationOutlined />} title='subnav 3'>
                <Menu.Item key='9'>option9</Menu.Item>
                <Menu.Item key='10'>option10</Menu.Item>
                <Menu.Item key='11'>option11</Menu.Item>
                <Menu.Item key='12'>option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{padding:'24px'}}>
            <Content className='m-content'>
              <Switch>
                 <Route exact path={`${path}`}>
                   Seleccione algo ..
                </Route>
                <Route path={`${path}/autos`}>
                   <Autos/>
                </Route>
                 <Route path={`${path}/count/:name`}>
                   <CountH/>
                </Route>
                <Route path={`${path}/error`}>
                   <Error/>
                </Route>
                <Route component={NoMatch}/>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>)
}


export default App;
