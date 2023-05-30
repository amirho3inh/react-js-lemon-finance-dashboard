import { Layout } from 'antd'
import { Routes, Route } from 'react-router-dom'
import Login from './auth/Login'
import Dashboard from './general/Dashboard'
import Account from './page/Account'
import Category from './page/Category'
import Turnover from './page/Turnover'
import Transfer from './page/Transfer'
import Report from './page/Report'
import '../assets/css/general.css'
import '../index.css'
import Providers from '../providers'
import RequireAuth from './utils/RequireAuth'

const { Content } = Layout

function App() {
  return (
    <div className='app'>
      <Providers>
        <Layout>
          <Content className='content'>
            <Routes>
              <Route path='/' element={<Login />} />
              {/* <Route path='/auth/*' element={<AuthRouter />} /> */}
              <Route
                path='/dashboard'
                element={<RequireAuth component={<Dashboard />} />}
              />
              <Route
                path='/account'
                element={<RequireAuth component={<Account />} />}
              />
              <Route
                path='/category'
                element={<RequireAuth component={<Category />} />}
              />
              <Route
                path='/turnover'
                element={<RequireAuth component={<Turnover />} />}
              />
              <Route
                path='/transfer'
                element={<RequireAuth component={<Transfer />} />}
              />
              <Route
                path='/report'
                element={<RequireAuth component={<Report />} />}
              />
            </Routes>
          </Content>
        </Layout>
      </Providers>
    </div>
  );
}

export default App;
