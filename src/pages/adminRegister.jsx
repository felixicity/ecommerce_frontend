import React,{useState} from 'react'
import { Link } from 'react-router-dom' 
import axios from 'axios'

const CreateAdmin = () => {
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    role:"",
    isAdmin:true
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
        
        const {name,email,password,confirmPassword,role,isAdmin} = formData

        if(email && (password !== confirmPassword)){
            return("passwords do not match!")
        }
        
        const userInfo = {name,email,password,role}

        const data = await axios.post("http://localhost:8000/users/admin",userInfo)
        console.log(data)
  } catch (error) {
      console.log(error)
  }
}
  

  return (
    <div className='wrapper'>
      <section className='login-form '>
          <form onSubmit={handleSubmit}>
              <h2>Create Admin</h2>
              <label htmlFor='username'>Name</label>
              <input 
                    id='name' 
                    type="text" 
                    placeholder='email'
                    name='email'
                    value={formData.name}
                    onChange={handleChange}
              />
              <label htmlFor='email'>Email</label>
              <input 
                    id='email' 
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
              <label htmlFor='role'>Role</label>
              <input 
                    id='role' 
                    type="text" 
                    placeholder='role'
                    name='role'
                    value={formData.role}
                    onChange={handleChange}
              />
              <button>Submit</button>
          </form>
          <p>Already a admin? <Link to="/adminlogin">Signin</Link></p>
      </section>
    </div>
  )
}

export default CreateAdmin