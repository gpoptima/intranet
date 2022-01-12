import React , {useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../actions/autos';
import { currency } from '../helpers/helpers';
import { List, Avatar, Space,Modal} from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';


function Items(props)
{

   const error = useSelector(state => state.autos.error)
   const loading = useSelector(state => state.autos.loading)
   const message = useSelector(state => state.autos.message)
   const data = useSelector(state => state.autos.data)
   const dispatch = useDispatch();

  useEffect(() => {
       dispatch(getData())
   },[])

  return(
    <List
    style={{overflow:'auto',height:'75vh'}}
    itemLayout='vertical'
    size='large'
    dataSource={data}
    loading={loading}
    renderItem={item => (
      <List.Item
        key={item.nombre}
        actions={[]}
        extra={
          <img
            width={300}
            alt='car'
            src={item.versiones.length>0?item.versiones[0].img:''}
          />
        }
      >
        <List.Item.Meta
          avatar={<img width='60' style={{borderRadius:'8px'}} src={item.img}/>}
          title={item.nombre}
          description={item.descripcion}
        />
        <b>Versiones</b> 
        <div>
        {
          item.versiones.map(function(subItem,i){
           
            return <div key={i}>{subItem.nombre+' '+subItem.descripcion+' '}
                        <b>{currency(subItem.precio)}</b>
                   </div>
          })
        }
        </div>
       
      </List.Item>
    )}
  />)
}

export default Items