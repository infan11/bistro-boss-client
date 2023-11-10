
import imageA from '../..//../assets/home/featured.jpg'
import '../Features/Features.css'
const Features = () => {
    return (
        <div className='feature-item bg-fixed mb-12 text-white bg-opacity-70 bg-slate-600 '>
            
            <div className='text-center '>
            <p className='text-yellow-300  text-2xl mt-9'>---Check it out---</p>
            <h2 className='font-bold text-3xl  md:w-4/12 mx-auto border-y-2 mb-24 ' >FROM OUR MENU</h2>
            </div>

            <div className='md:flex bg-opacity-30 bg-slate-400 justify-center items-center py-16 gap-10 px-16   '>
                <img className='w-[600px] h-[350px]' src={imageA} alt="" />
            <div>
                <p>March 20, 2023</p>
               <p> WHERE CAN I GET SOME?</p>
                <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <button className='btn btn-outline mt-10 border-b-8 '>READ HOME</button>
            </div>
            
            </div>
        </div>
    );
};

export default Features;