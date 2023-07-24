import React,{useState} from 'react'
import { Link } from 'react-router-dom' 
import axios from 'axios'

const Register = () => {
  const [formData,setFormData] = useState({
    email:"",
    password:"",
    confirmPassword:""
  })


function handleChange(e) {
    const {name,value} = e.target;

    setFormData((prevData) =>{
        return {
            ...prevData,
            [name]:value
        }
    })
}

async function handleSubmit(e){
    e.preventDefault()
    try {
        
        const {email,password,confirmPassword} = formData

        if(email && (password !== confirmPassword)){
            return("passwords do not match!")
        }
        
        const userInfo = {email,password}

        const data = await axios.post("http://localhost:8000/users",userInfo)
        console.log(data)
  } catch (error) {
      console.log(error)
  }
}
  

  return (
    <div className='wrapper'>
      <section className='login-form '>
          <form onSubmit={handleSubmit}>
              <h2>Create an Account</h2>
              <label htmlFor='username'>Email</label>
              <input 
                    id='username' 
                    type="text" 
                    placeholder='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
              />
              <label htmlFor='password'>Password</label>
              <input 
                    id='password' 
                    type="password" 
                    placeholder='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
              />
              <label htmlFor='password'>Confirm Password</label>
              <input 
                    id='password' 
                    type="password" 
                    placeholder='confirm password'
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    onChange={handleChange}
              />
              <button>Submit</button>
          </form>
          <p>Already a user? <Link to="/login">Signin</Link></p>
      </section>
    </div>
  )
}

export default Register