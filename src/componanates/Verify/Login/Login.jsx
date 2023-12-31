import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SosialLink from '../../SocialLink/SosialLink';
import useAuth from '../../../Hooks/useAuth';
const Login = () => {
   
  const captchaRef = useRef(null)
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const googleSignIn = useAuth()
  const from = location.state?.from?.pathname || "/";
  console.log('state in the location login page', location.state)

  useEffect(() => {
      loadCaptchaEnginge(6);
  }, [])

  const handleLogin = event => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      signIn(email, password)
          .then(result => {
              const user = result.user;
              console.log(user);
              Swal.fire({
                  title: 'User Login Successful.',
                  showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                  }
              });
              navigate(from, { replace: true });
          })
  }

  const handleValidateCaptcha = (e) => {
      const user_captcha_value = e.target.value;
      if (validateCaptcha(user_captcha_value)) {
          setDisabled(false);
      }
      else {
          setDisabled(true)
      }
  }

    return (
       <>
           <Helmet>
        <title>Bistro Boss | Login</title>
        
      </Helmet>


        <div>
         <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center md:w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card md:1/2 max-w-sm shadow-2xl bg-base-100">
        {/* form */}
      <form onSubmit={handleLogin} className="card-body">
           {/* Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
        </div>
        {/* password */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"  placeholder="Password"  name="password" className="input input-bordered" required />      
        </div>
         {/* Captcha */}
         <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input  onBlur={handleValidateCaptcha}  type="text" placeholder="Captcha"  ref={captchaRef} className="input input-bordered" required />
       <button className='btn btn-outline btn-xs mt-2 '>Validete</button>
        </div>
        <div className="form-control mt-6">
          
          <input  disabled={disabled} type="submit"className="btn btn-primary" value="Login" />
        </div>
      </form>
      <button>You Havn't Account ? Now <Link to={"/signUp"}>  SignUp</Link></button>
      <div className="divider"></div> 
      <div className='ml-20'>
      <SosialLink></SosialLink>
      </div>

      
    </div>
  </div>
</div>
        </div>
       </>
    );
};

export default Login;