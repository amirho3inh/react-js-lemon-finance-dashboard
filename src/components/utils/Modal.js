import { Modal as AntModal } from 'antd';
import { Button } from '../utils/Form'
import { useState } from 'react';

const Modal = ({BtnLable = 'Open', BtnType = 'primary', BtnStyle = 'bg-lime-700 text-white hover:bg-lime-900', title = 'modal title', body = '', subFunc = '' , ...props}) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = async () => {
    setLoading(true);
    const res =  await subFunc();
    console.log(res)
    if(!res){
      setTimeout(() => {
        setLoading(false);
        setOpen(false);
      }, 3000);
    }else{
      console.log('yes res')
      setLoading(false);
      setOpen(false);
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button label={BtnLable} type={BtnType} onClick={showModal} className={BtnStyle} />
      <AntModal
        open={open}
        title={title}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          // <Button key="back" label='Return' onClick={handleCancel} className />,
          <Button key="submit" label='submit' type="primary" loading={loading} onClick={handleOk} className='bg-blue-600 text-white' />
        ]}
        {...props}
      >
        {body}
      </AntModal>
    </>
  );
};

export default Modal;