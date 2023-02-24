
import React from "react";
import { AiOutlineTwitter } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { useNavigate } from "react-router-dom";
import Layout from "../../components/login/Layout";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {

    navigate("/Register")

  };


  return (
    <Layout>
      <div>
        {/* <div className="w-100 h-100 d-flex justify-content-center align-items-center"> */}
          <div className="card my-3 w-100 shadow example-card " id="example-card">
            <div className="card-header bg-dark">
              <ul className="nav nav-pills card-header-pills" id="example-tab" role="tablist">
                <li className="nav-item mr-5">
                  <span className="nav-link active example-login-tab " id="example-login-tab" data-toggle="pill" role="tab" aria-controls="example-login" aria-selected="true" ><i className="fa fa-lock"></i> Sign In</span>
                </li>
                <li className="nav-item">
                  <span className="nav-link example-register-tab" id="example-register-tab" data-toggle="pill" role="tab" aria-controls="example-register" aria-selected="false" onClick={handleClick}><i className="fa fa-user-plus"></i> Create an account</span>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div className="tab-content" id="example-tab-content">
                <div className="tab-pane show fade active" id="example-login" role="tabpanel" aria-labelledby="example-login-tab">
                  <form>
                    <div className=" text-center title">
                      <h3>Language School</h3>
                      <p>Please enter your login information below</p>
                    </div>
                    <div className=" mb-3">
                      <label htmlFor="login_email"><i className="fa fa-user"></i> Email address</label>
                      <input type="email" className="form-control" id="login_email" placeholder="your_name@example.com" />
                    </div>
                    <div >
                      <label htmlFor="login_password"><i className="fa fa-lock"></i> Password</label>
                      <input type="password" className="form-control" id="login_password" placeholder="Your unique password" />
                    </div>
                    <div className="row my-2">
                      <div className="col d-flex justify-content-center">

                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="form2Example34" />
                          <label className="form-check-label" htmlFor="form2Example34"> Remember me </label>
                        </div>
                      </div>

                      <div className="col">
                        <a href="#!">Forgot password?</a>
                      </div>
                    </div>
                    <div >
                      <button type="button" className="btn btn-danger btn-block w-100 my-2">Sign in</button>
                    </div>
                    <div className=" text-center">
                      <p><small>Or sign in with</small></p>
                    </div>
                    <div >
                      <button type="button" className="btn btn-primary btn-block btn-facebook w-100 my-2"><GrFacebookOption /> Facebook</button>
                      <button type="button" className="btn btn-primary btn-block btn-twitter w-100 my-2"><AiOutlineTwitter /> Twitter</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </Layout>

  );
}
export default Login;
