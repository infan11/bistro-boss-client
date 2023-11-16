
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import SosialLink from "../../SocialLink/SosialLink";




const SignUp = () => {
  const {register,  handleSubmit,reset, formState: { errors },} = useForm()
  const {createUser, updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate()
  const axiosPublic = useAxiosPublic();
  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password)
    .then(result =>{
      const loggedUser = result.user;
   
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
          .then(() => {
             //  create user entry in the database
                 const userInfo ={
                  name: data.name,
                  email: data.email
                 }
                 axiosPublic.post("/users", userInfo)
                 .then(res  => {
                  if(res.data.insertedId){
                    console.log("user added in the database")
                    reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User created successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/');
                  }
                 })
           

          })
          .catch(error => console.log(error))
  })

  }
    return (
        <>
            <Helmet>
        <title>Bistro Boss | SignUp</title>
        
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
     <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        {/* name */}
        <div className="form-control">
         <label className="label">
           <span className="label-text">Name</span>
         </label>
         <input type="text" placeholder="Your Name" {...register("name" , { required: true })}  name="name" className="input input-bordered"  />
         {errors.name && <span className="text-red-500">Name field is required</span>}
       </div>
        {/* Photo url */}
        <div className="form-control">
         <label className="label">
           <span className="label-text">Photo Url</span>
         </label>
         <input type="text" placeholder="Photo" {...register("PhotoURL" , { required: true })}   className="input input-bordered"  />
         {errors.name && <span className="text-red-500">Photo Url is required</span>}
       </div>
          {/* Email */}
       <div className="form-control">
         <label className="label">
           <span className="label-text">Email</span>
         </label>
         <input type="email" placeholder="Email" {...register("email" , { required: true })}  name="email" className="input input-bordered" />
         {errors.email && <span className="text-red-500">Email field is required</span>}
       </div>
       {/* password */}
       <div className="form-control">
         <label className="label">
           <span className="label-text">Password</span>
         </label>
         <input type="password"  placeholder="Password" {...register("password" ,
         { required: true  , minLength: 6 , maxLength: 10 , 
          pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/   })}
           name="password" className="input input-bordered"  />    
         {errors.password?.type === "required" && (
        <p className="text-red-500">password is required</p>  )}
         {errors.password?.type === "minLength" && (
        <p className="text-red-500">password  must be 6 characters</p>  )}
         {errors.password?.type === "maxLength" && (
        <p className="text-red-500">password must be lest 20 characters</p>  )}
    
         {errors.password?.type === "pattern" && (
        <p className="text-red-500">Pasword must havepon upercase one
         lower case, one number and one speacial characters 
        </p>  )}
    
       </div>
        
       <div className="form-control mt-6">
       <button className="btn btn-primary">SignUp</button>
       </div>
     </form>
     <p > You Have An Account ? Now<Link to={'/login'}>Login</Link></p>
     <SosialLink></SosialLink>
   </div>
 </div>
</div>
       </div></>
    );
};

export default SignUp;