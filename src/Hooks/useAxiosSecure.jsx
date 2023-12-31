import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecure = axios.create({
 baseURL: "https://bistro-boss-server-xi-two.vercel.app"
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();
       // request interceptor to add authorization header for every secure call to teh api
       axiosSecure.interceptors.request.use(  (config ) => {
        const token = localStorage.getItem('accesstoken')
        // console.log('request stopped by interceptors', token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
    },  (error) => {
        // Do something with request error
        return Promise.reject(error);
    });


    // intercepts 401 and 403 status
    axiosSecure.interceptors.response.use( (response) => {
        return response;
    }, async (error) => { 
        const status = error.response.status;
        // console.log('status error in the interceptor', status);
        // for 401 or 403 logout the user and move the user to the login
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login');
        }
        return Promise.reject(error);
    })
    return axiosSecure
};

export default useAxiosSecure;