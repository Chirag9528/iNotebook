import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
  const [credentials , setcredentials] = useState({name:"" , email:"" , password:"" , cpassword: ""})
    let navigate = useNavigate()
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const {name , email , password} = credentials;
        const response = await fetch('http://localhost:8000/api/auth/createuser',{
            method : 'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body : JSON.stringify({name, email , password})
        });
        const json = await response.json()
        if (json.success){
          localStorage.setItem('token' , json.authtoken);
          props.showAlert("Account Created Successfully" , "success")
          navigate('/')
        }
        else{
          props.showAlert("Invalid Credentials" , "danger")
          navigate('/signup')
        }

    }
    const onChange = (e)=>{
        setcredentials({...credentials , [e.target.name] : e.target.value})
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <h2>Register Here</h2>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text" className="form-control" id="name" name='name' minLength={5} onChange={onChange}  aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" className="form-control" id="email" name='email' onChange={onChange}  aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control" id="password" name='password' required minLength={5} onChange={onChange} />
    </div>
    <div className="mb-3">
      <label htmlFor="cpassword" className="form-label">Confirm Password</label>
      <input type="password" className="form-control" id="cpassword" name='cpassword' required minLength={5} onChange={onChange} />
    </div>
    
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
    </>
  )
}

export default Signup
