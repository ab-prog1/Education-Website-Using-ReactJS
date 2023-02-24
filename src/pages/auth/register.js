import React, {  useState } from 'react'
import { useNavigate } from "react-router-dom";
import Layout from '../../components/login/Layout';
import { toast } from "react-toastify";
import "./login.css";







const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();




    if (name === '' || email === '' || password === '') {
      toast.error("name, email and password is required")
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const res = await fetch("http://localhost:8000/api/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        c_password: confirmPassword
      }),

    
    });




    if (res.ok) {
      console.log( res.status);
       
    } else {
      console.log( res.status);
    }
  }



  const navigate = useNavigate();
  const handleClick = () => {

    navigate("/Login")

  };




  return (
    <Layout>
      <div>
        <div className="card my-3 w-100 shadow example-card " id="example-card">
          <div className="card-header bg-dark">
            <ul className="nav nav-pills card-header-pills" id="example-tab" role="tablist">
              <li className="nav-item">
                <span className="nav-link  example-login-tab" id="example-login-tab" data-toggle="pill" role="tab" aria-controls="example-login" aria-selected="true" onClick={handleClick}><i className="fa fa-lock"></i> Sign In</span>
              </li>
              <li className="nav-item">
                <span className="nav-link active example-register-tab" id="example-register-tab" data-toggle="pill" href="#example-register" role="tab" aria-controls="example-register" aria-selected="false" ><i className="fa fa-user-plus"></i> Create an account</span>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <div className="tab-content" id="example-tab-content">
              <div className="tab-pane  show fade  active nav-rotate" id="example-register" role="tabpanel" aria-labelledby="example-register-tab">
                <form onSubmit={handleSubmit}>
                  {/* <div className=" text-center">
                    <h3>Language School</h3>
                    <p>Enter the information below to create an account</p>
                  </div> */}
                  <div className=" mb-3">
                    <label htmlFor="name"><i className="fa fa-user"></i> Full name</label>
                    <input type="text" className="form-control" placeholder="your_name@example.com" id="name" onChange={e => setName(e.target.value)} />
                  </div>
                  <div className=" mb-3">
                    <label htmlFor="email"><i className="fa fa-user"></i> Email address</label>
                    <input type="email" className="form-control" placeholder="your_name@example.com" id="email" onChange={e => setEmail(e.target.value)} />
                  </div>
                  <div className=" mb-3">
                    <label htmlFor="password"><i className="fa fa-lock"></i> Password</label>
                    <input type="password" className="form-control" placeholder="Your unique password" id="password" onChange={e => setPassword(e.target.value)} />
                  </div>
                  <div className=" mb-3">
                    <label htmlFor="c-password"><i className="fa fa-lock"></i> Confirm password</label>
                    <input type="password" className="form-control" placeholder="Re-enter your password to make sure" id="c-password" onChange={e => setConfirmPassword(e.target.value)} />
                  </div>
                  {/* <div >
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="register_eula" />
                      <label className="custom-control-label" htmlFor="register_eula">Yes, I agree with the terms and conditions</label>
                    </div>
                  </div> */}
                  <div >
                    <button type="submit" className="btn btn-danger btn-block">Create my account</button>
                    {/* {loading && <div className="spinner-border spinner-border-sm ms-2"></div>} */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>

  );
}
export default Signup;



