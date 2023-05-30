import { BellOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Col, Dropdown, Row } from 'antd';

const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          پروفایل
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          تغییر گذرواژه
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          خروج
        </a>
      ),
    },
  ];
  
function DasboardHeader() {
    return (
        <>
        <Row justify="center" align="top">
            <Col span={12}></Col>
            <Col span={12} className='text-left padding-10'>
            <Badge dot className='margin-10'>
                <Avatar shape="square" size='large' icon={<BellOutlined />} />
            </Badge>
            <Dropdown
                menu={{
                items,
                }}
                placement="bottomLeft"
                trigger={['click']}
            >
                <Avatar shape="square" size='large' icon={<UserOutlined />} style={{
                backgroundColor: 'rgb(28 28 28)',
                color: '#cccccc',
                }} />
            </Dropdown>
            
            </Col>
        </Row>
        </>
    )
}

export default DasboardHeader
