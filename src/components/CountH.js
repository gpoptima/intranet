
import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Button} from 'antd';
import {ExclamationCircleOutlined,PauseCircleOutlined,PlayCircleOutlined} from '@ant-design/icons';


function CountH(props)
{
   const [count,setCount] = useState(0)
   const [play,setPlay] = useState(true)
   const { name } = useParams();

   useEffect(() => {
     const timer = setInterval(() => {
        if (play)
        {
           setCount(count+1)
        }
      },1000);
     return ()=>{clearInterval(timer)}
   },[count,play]);

   return (
      <div>
        <h2>{props.name?props.name:name}</h2>
        <h2>{count}</h2>
        <Button type="dashed" danger icon={<ExclamationCircleOutlined/>} onClick={()=>setCount(0)} 
          style={{marginRight:'10px',width:'100px'}}>
          RESET
        </Button>
        <Button type='primary' icon={play?<PauseCircleOutlined />:<PlayCircleOutlined/>} onClick={()=>setPlay(!play)} 
          style={{marginRight:'10px',width:'100px'}}>
          {play?'PAUSE':'PLAY'}
        </Button>
      </div>)
}


export default CountH;