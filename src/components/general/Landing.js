import { LoginOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/em-logo.svg'


export default function App() {
  return (
    <div className='landing'>
      <Row justify="center" align="middle">
        <Col span={24} style={{textAlign: 'center'}} className='logo-box'>
          <img src={Logo} className='logo' alt='bezhdar-logo'></img>
          <h1 style={{margin:0}}>بــــژدار</h1>
          <p>سیستم هوشمند سرمایه گذاری</p>
        </Col>
      </Row>
      <Row justify="space-between" align="bottom" className='button-box'>
        <Col span={24} style={{textAlign: 'center'}}>
        <Link to={`/auth/login`}>
          <Button type="primary" shape="round" icon={<LoginOutlined />}>
            ورود به سیستم
          </Button>
        </Link>
        </Col>
      </Row>
    </div>
  );
}
