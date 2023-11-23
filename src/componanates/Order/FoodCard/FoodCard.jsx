import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";




const FoodCard = ({item}) => {
  const {name, image , price , recipe, _id} = item;
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate()
  const {user} = useAuth()
  const location = useLocation()
  const [, refetch] = useCart();
  const handleAddToCart = () =>{
    if(user && user.email){
      //  send to cart database
     

      const cartItem ={
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts', cartItem)
      .then(res => {
          console.log(res.data)
          if (res.data.insertedId) {
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${name} added to your cart`,
                  showConfirmButton: false,
                  timer: 1500
              });
              // refetch cart to update the cart items count
              refetch();
          }

      })
}
      // fetch('https://bistro-boss-server-xi-two.vercel.app/carts' , {
      //   method:"POST",
      //   headers: {"content-type"  : "application/json" },
      //   body: JSON.stringify(cartItem)
      // })
      // .then(res => res.json())
      // .then(data => {
      //   console.log(data..)
      // })
    
    
    else {
      Swal.fire({
          title: "You are not Logged In",
          text: "Please login to add to the cart?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login!"
      }).then((result) => {
          if (result.isConfirmed) {
              //   send the user to the login page
              navigate('/login', { state: { from: location } })
          }
      });
  }
}
    return (
        <div>
              
       <div className="card w-96   bg-base-100 shadow-xl">
  <figure className="pt-10 ">
    <img src={image} alt="" className=" w-[430px] h-[320px]" />
    <p className="absolute right-0 mr-4 top-1 px-4 bg-black ">${price}</p>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
      <button onClick={ handleAddToCart} className="btn btn-outline text-white ">ADD TO CART</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;