import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const ForgotPass = () => {
  return (
    <div className="p-forgotPass">
      <body class="bg-gradient-primary">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
              <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">
                  <div class="row">
                    <div class="col-lg-6 d-none d-lg-block bg-password-image"></div>
                    <div class="col-lg-6">
                      <div class="p-5">
                        <div class="text-center">
                          <h1 class="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                          <p class="mb-4">
                            We get it, stuff happens. Just enter your email address below and we'll send you a link to
                            reset your password!
                          </p>
                        </div>
                        <form class="user">
                          <div class="form-group">
                            <input
                              type="email"
                              class="form-control form-control-user"
                              id="exampleInputEmail"
                              aria-describedby="emailHelp"
                              placeholder="Enter Email Address..."
                            />
                          </div>
                          <p class="btn btn-primary btn-user btn-block">Reset Password</p>
                        </form>
                        <hr />
                        <div class="text-center">
                          <Link to="/register">
                            <p class="small">Create an Account!</p>
                          </Link>
                        </div>
                        <div class="text-center">
                          <Link to="/login">
                            <p class="small">Already have an account? Login!</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default ForgotPass;
