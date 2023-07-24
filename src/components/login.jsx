import React,{useState} from 'react'
import { BiUser} from 'react-icons/bi'

const Login = ({toggleUserOptions}) => {
  const [isloggedIn,setIsLoggedIn] = useState(false)

  const toggleLogIn = () =>{
    setIsLoggedIn(prevState => !prevState)
  }
  return (
    <>
      <BiUser className='icon' style={{fontSize:"1.6rem"}} onClick={toggleUserOptions}/> 
      {/* {!isloggedIn && <button onClick={toggleLogIn}>Signin</button>} */}

    </>
  )
}

export default Login