import { AppstoreOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
// import Logo from '../../assets/images/em-logo.svg'
// import MoneySlider from '../dashboard/MoneySlider';
// import DasboardHeader from '../share/DasboardHeader';
import Navbar from '../share/Navbar'

export default function Layout(props) {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  return (
    // <!-- component -->
<div className="bg-slate-300 min-h-screen flex items-center justify-center">
  <div className="min-h-screen bg-slate-200 flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
    {/* <!-- Navigation --> */}
    <Navbar />
    {/* <!-- Content --> */}
    <div className="flex-1 px-2 lg:pl-20 sm:px-0">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-extralight text-black/50">{props.title}</h3>
        <div className="inline-flex items-center space-x-2">
          <Popover placement="bottomRight" content={content} title="Title" trigger="click">
            <span className='bg-lime-800 text-white/50 p-2 rounded-md hover:text-white smooth-hover'>
              <AppstoreOutlined  className="text-2xl h-6 w-6 sm:h-6 sm:w-6" />
            </span>
          </Popover>
        </div>
      </div>
      <div className="mb-10 sm:mb-0 mt-10">
        {props.children}
      </div>
    </div>
  </div>
</div>
  );
}
