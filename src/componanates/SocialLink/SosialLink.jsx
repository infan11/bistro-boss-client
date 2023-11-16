import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";


const SosialLink = () => {
const { googleSignIn }= useAuth();


 const    handleGoogleLogin = () =>{
        googleSignIn()
      .then(result =>{
        console.log(result.user)
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