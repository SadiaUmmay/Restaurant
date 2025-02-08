import { useContext } from "react";
import PrimaryBtn from "../../components/PrimaryBtn";
import { AuthContext } from "../../providers/AuthProvider";
import usePublic from "../../Hooks/usePublic";
import Swal from "sweetalert2";
import usecart from "../../Hooks/usecart";

const OurShopCard = ({ food }) => {
  const [, refetch] = usecart()
  const axiosPublic = usePublic()
  const { user } = useContext(AuthContext)
  // console.log(user?.email)
  const { recipe, name, price, image, _id } = food;
  const handleSignleFood = () => {
    const foodData = {
      email: user?.email,
      foodId: _id,
      name,
      image,
      price
    }
    axiosPublic.post('/carts', foodData)
    .then(res=>{
      if(res.data.acknowledged){
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `${name} add to cart successfully`,
          showConfirmButton: false,
          timer: 1500
        });
        refetch()
      }
      console.log(res)
    })
    console.log(foodData)
  }
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="">
        <p className="bg-black p-1 rounded text-white absolute top-0 right-2">${price}</p>
        <img
          src={image}
          className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="">
          <button onClick={handleSignleFood}>
            <PrimaryBtn
              title='Add to cart'
            ></PrimaryBtn>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurShopCard;