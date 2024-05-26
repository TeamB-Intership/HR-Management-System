import React from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const location=useLocation();
console.log(location)
  return (
    <div>
    <h1>Hello,{location?.state?.emailDetail}</h1>  

{/* <p>
here using optional chanining ,so we open open the home page
 without login details we shouldn't get error like cannot read
  null properties
</p> */}
    </div>
  )
}

export default Home