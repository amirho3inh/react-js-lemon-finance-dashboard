import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { ConfigProvider } from 'antd'
// import fa_IR from 'antd/lib/locale/fa_IR'
import en_US from 'antd/lib/locale/en_US'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider
    direction='ltr'
    locale={en_US}
    theme={{ token: { fontFamily: 'IRANSans' } }}
  >
    <App />
  </ConfigProvider>
);
