import { useForm } from "react-hook-form"
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";



const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic()
    const image_hosting_key =  import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
    const onSubmit = async (data) =>{
        // image upload  to imgbb and then get an url 
        const imageData = new FormData()
        imageData.append("image" , data.image[0])
        // const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api,imageData,{
            // headers: {
            //     "content": "multipart/form-data"
            // }
        }) ;
        if(res.data.success){
            // now send he menu item data to the server with the image Url 
            const menuItem = {
                name: data.menu,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url

            }
            const menuRes = await   axiosSecure.post("/menu" , menuItem)
            console.log(menuRes.data)
            if(menuRes.data.insertedId){
                reset()
                // show the popup
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
       console.log(res.data);
        }
    }

    return (
        <div>
              <div className='text-center '>
            <p className='text-yellow-300  text-2xl mt-9'>---Check it out---</p>
            <h2 className='font-bold text-3xl  md:w-4/12 mx-auto border-y-2 mb-24 ' >FROM OUR MENU</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Recipe Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn">
                        Add Item <FaUtensils className="ml-4"></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;