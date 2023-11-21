
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../../componanates/Home/Shared/Footer/Footer';
import NavBar from '../../componanates/Home/Shared/NavBar/NavBar';

const Main = () => {
    const location = useLocation();
    
    const noHederFooter = location.pathname.includes("login") || 
    location.pathname.includes("signUp" )

    return (
    
        <div>
            { noHederFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
        {noHederFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;