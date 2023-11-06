import React from 'react'
import { CirclesWithBar } from "react-loader-spinner"
const Loader = () => {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:"center", height:"100vh"}} >

<CirclesWithBar
  height="100"
  width="100"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  outerCircleColor=""
  innerCircleColor=""
  barColor=""
  ariaLabel='circles-with-bar-loading'
/>
    </div>
  )
}

export default Loader
