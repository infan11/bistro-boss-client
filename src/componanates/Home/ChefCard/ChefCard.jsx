
import imageA from '..//..//../assets/home/slide1.jpg'

const ChefCard = () => {
    
    return (
        <div>
            <div className='text-center  '>
            <p className='text-yellow-300  mb-2'>---Should Try---</p>
            <h2 className='font-bold text-2xl md:w-4/12 mx-auto border-y-2 mb-8 ' >CHEF RECOMMENDS</h2>
        </div>
       
       <div className='grid md:grid-cols-3 '>
        
       <div className="card w-96  bg-base-100 shadow-xl">
  <figure className="pt-10 ">
    <img src={imageA} alt="" className=" w-[430px] h-[320px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold">Caeser Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">
      <button className="btn btn-outline text-white ">ADD TO CART</button>
    </div>
  </div>
</div>
       <div className="card w-96  bg-base-100 shadow-xl">
  <figure className="pt-10 ">
    <img src={imageA} alt="" className=" w-[430px] h-[320px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold">Caeser Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">
      <button className="btn btn-outline text-white ">ADD TO CART</button>
    </div>
  </div>
</div>
       <div className="card w-96  bg-base-100 shadow-xl">
  <figure className="pt-10 ">
    <img src={imageA} alt="" className=" w-[430px] h-[320px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold">Caeser Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">
      <button className="btn btn-outline text-white ">ADD TO CART</button>
    </div>
  </div>
</div>
       </div>

        </div>
    );
};

export default ChefCard;