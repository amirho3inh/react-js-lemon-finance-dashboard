import { Link, useLocation } from 'react-router-dom'
import { Tooltip } from 'antd';
import { HomeOutlined, CreditCardOutlined, SettingOutlined, LogoutOutlined, PieChartOutlined, FolderOpenOutlined, SwapOutlined, DollarCircleOutlined } from '@ant-design/icons';

function NavbarMe () {
  const location = useLocation()
  const currentRoute = location.pathname

  const menuItemTop = [{
    id: 1,
    title: 'Dashboard',
    route: '/dashboard',
    icon: <HomeOutlined className="text-2xl h-5 w-5 sm:h-6 sm:w-6" />
  }, {
    id: 2,
    title: 'Account',
    route: '/account',
    icon: <CreditCardOutlined className="text-2xl h-5 w-5 sm:h-6 sm:w-6" />
  }, {
    id: 3,
    title: 'Category',
    route: '/category',
    icon: <FolderOpenOutlined className="text-2xl h-5 w-5 sm:h-6 sm:w-6" />
  }, {
    id: 4,
    title: 'Turnover',
    route: '/turnover',
    icon: <DollarCircleOutlined className="text-2xl h-5 w-5 sm:h-6 sm:w-6" />
  }, {
    id: 5,
    title: 'Transfer',
    route: '/transfer',
    icon: <SwapOutlined className="text-2xl h-5 w-5 sm:h-6 sm:w-6" />
  }, {
    id: 6,
    title: 'Report',
    route: '/report',
    icon: <PieChartOutlined className="text-2xl h-5 w-5 sm:h-6 sm:w-6" />
  }]

  const menuItemBottom = [{
    id: 1,
    title: 'Setting',
    route: '/setting',
    icon: <SettingOutlined className="text-2xl h-5 w-5 sm:h-6 sm:w-6" />
  }, {
    id: 2,
    title: 'Logout',
    route: '/logout',
    icon: <LogoutOutlined className="text-2xl h-5 w-5 sm:h-6 sm:w-6" />
  }]

  return <div className="lg:h-[92vh] lg:fixed bg-gradient-to-tr from-amber-300 to-lime-700 px-2 lg:px-4 py-2 lg:py-10 sm:rounded-xl flex lg:flex-col justify-between">
    <nav className="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
      {menuItemTop.map((item)=> (
        <Tooltip title={item.title} placement='right' arrow={false} key={item.id}>
          <Link
            to={item.route}
            className={`${currentRoute === item.route ? `bg-lime-900 text-white` : `text-black/50`} p-4 inline-flex justify-center rounded-md hover:bg-lime-800 hover:text-white smooth-hover`} href="#">
            {item.icon}
          </Link>
        </Tooltip>
      ))}
    </nav>
    <div className="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
      {menuItemBottom.map((item)=> (
        <Tooltip title={item.title} placement='right' arrow={false} key={item.id}>
          <Link
            to={item.route}
            className={`${currentRoute === item.route ? `bg-lime-900 text-white` : `text-black/50`} p-4 inline-flex justify-center rounded-md hover:bg-lime-800 hover:text-white smooth-hover`} href="#">
            {item.icon}
          </Link>
        </Tooltip>
      ))}
    </div>
  </div>
}

export default NavbarMe
