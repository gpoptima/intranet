import React from 'react';
import { Result, Button,Typography} from 'antd';
import { Link } from 'react-router-dom';
import { CloseCircleOutlined} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const { Paragraph, Text } = Typography;

function Error(props)
{
   const history = useHistory();

    
   function goBack() {
     history.goBack()
   }

   return (
      <Result
       status='error'
       title='Submission Failed'
       subTitle='Please check and modify the following information before resubmitting.'
       extra={[
         <Button key='0' type='primary' onClick={goBack}>Regresar</Button>
       ]}>
      <div className='desc'>
      <Paragraph>
        <Text
          strong
          style={{
            fontSize: 16,
          }}
        >
          The content you submitted has the following error:
        </Text>
      </Paragraph>
      <Paragraph>
        <CloseCircleOutlined className='site-result-demo-error-icon' /> Your account has been
        frozen. <a>Thaw immediately;</a>
      </Paragraph>
      <Paragraph>
        <CloseCircleOutlined className='site-result-demo-error-icon' /> Your account is not yet
        eligible to apply. <a>Apply Unlock;</a>
      </Paragraph>
    </div>
    </Result>
  )
}


export default Error;