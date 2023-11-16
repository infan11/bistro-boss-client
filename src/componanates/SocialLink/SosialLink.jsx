import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SosialLink = () => {
const { googleSignIn }= useAuth();
const axiosPublic = useAxiosPublic();
const navigate = useNavigate()

 const    handleGoogleLogin = () =>{
        googleSignIn()
      .then(result =>{
        console.log(result.user)
        const userInfo = {
            email :result.user?.email,
            name: result.user?.displayName 
        }
        axiosPublic.post("/users", userInfo)
        .then(res =>{
            console.log(res.data);
            navigate("/")
        })
      })
    }
    return (
        <div>
            <div>
                <button onClick={handleGoogleLogin} className="btn btn-primary"><FaGoogle></FaGoogle>Google</button>
            </div>
        </div>
    );
};

export default SosialLink;