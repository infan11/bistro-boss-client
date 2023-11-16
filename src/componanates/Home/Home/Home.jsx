import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefCard from "../ChefCard/ChefCard";
import Features from "../Features/Features";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Testemonal from "../Testemonal/Testemonal";



const Home = () => {
    return (
        
        <div>
           <Helmet>
            <title>Bistro Boss | Home</title>
           </Helmet>
            <Banner></Banner>
            <Category></Category>
            <BistroBoss></BistroBoss>
           <PopulerMenu></PopulerMenu>
           <CallUs></CallUs>
           <ChefCard></ChefCard>
           <Features></Features>
           <Testemonal></Testemonal>
        </div>
    );
};

export default Home;