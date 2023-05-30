// import React, { useContext } from 'react'
import { Spin } from 'antd';
// import ThemeContext from '../../contexts/ThemeContext'

export default function Loading () {
  // const theme = useContext(ThemeContext)

  return (
    <div className="grid justify-center content-center h-screen w-screen">
      <Spin size="large" />
    </div>
    
    // <div style={theme}>
    //   Loading ...
    // </div>
  )
}