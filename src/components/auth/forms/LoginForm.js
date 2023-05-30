import { message } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Text, Submit, TextPassword } from '../../utils/Form'
import useField from '../../../hooks/useField'
import UserContext from '../../../contexts/UserContext'

export default function LoginForm () {
  const { login, isLoggedIn } = useContext(UserContext)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const username = useField()
  const password = useField()

  function loginSubmit(){
    setLoading(true)
    login({ username: username.value, password: password.value }, loginFinally)
  }

  function loginFinally(msg){
    setLoading(false)
    if(isLoggedIn){
      message.success('Login')
      navigate('/dashboard')
    }else{
      msg && message.error(`${msg}`)
    }
  }

  return (
    <>
      <Form layout="vertical" className="bg-white" onFinish={loginSubmit}>
        <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
        <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
        <Text
            className='rounded-2xl py-2 px-3 pl-2 border-2'
            name='username'
            required
            placeholder='Email Address'
            prefix={<UserOutlined />}
            { ...username }
          />
        <TextPassword
            className='rounded-2xl py-2 px-3 pl-2 border-2'
            name='password'
            required
            placeholder='Password'
            prefix={<KeyOutlined />}
            { ...password }
          />
        <Submit type='succsess' label='Login' loading={loading} className="block w-full bg-lime-700 mt-4 py-2 h-9 rounded-2xl text-white font-semibold"/>
        <span className="text-sm ml-2 hover:text-green-900 cursor-pointer">Forgot Password ?</span>
      </Form>
    </>
    
  )
}