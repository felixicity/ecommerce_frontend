import React,{useState} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const setAuthToken = (type,token) => {
    if(token) {
        axios.defaults.headers.common["Authorization"] = `${type} ${token}`
    }
}

const Login = () => {
    const navigate = useNavigate()
    const notify = () => toast.success("Log in successful", {
        position: "top-center",
        autoClose: 5000,
        closeButton:false,
        hideProgressBar:true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
        });
    
    const notifyError = (err) => toast.error(err, {
        position: "top-center",
        autoClose: 5000,
        closeButton:false,
        hideProgressBar:true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
        });

    const [formData,setFormData] = useState({
        email:"",
        password:""
      })

    const [clicked, setClicked] = useState(false)
    
      function saveChange(e) {
          const {name,value} = e.target;
          setFormData((prevData) =>{
            return {
                ...prevData,
                [name]:value
            }
          })
      }
      
    async function handleSubmit(e){
        try {
            e.preventDefault()
            const data = await axios.post("http://localhost:8000/login/user",formData)
            const success = data.status == 200
        
            if(success){
                notify()
                const token = data.data.access_token
                const type = data.data.token_type

                localStorage.setItem("access_token",token)
                setAuthToken(type,token)
                setTimeout(() => {
                    navigate("/")
                },4000)
            }else{
                notifyError(data.status.toString())
            }
        }catch(err){
           notifyError("Invalid Credentials")
        }
      }


  return (
    <div className='wrapper'>
      <section className='login-form '>
          <form onSubmit={handleSubmit}>
              <ToastContainer 
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    theme="dark"
                />
              <h2>Login</h2>
              <label htmlFor='username'>Email</label>
              <input 
                    id='username' 
                    type="text" 
                    placeholder='email'
                    name='email'
                    value={formData.email}
                    onChange={saveChange}
              />
              <label htmlFor='password'>Password</label>
              <input 
                    id='password' 
                    type="password" 
                    placeholder='password'
                    name='password'
                    value={formData.password}
                    onChange={saveChange}
              />
            <button onClick={() => setClicked(true)}>{ clicked ? "Please wait ..." : "Submit" }</button>
              
          </form>
      </section>
    </div>
  )
}

export default Login