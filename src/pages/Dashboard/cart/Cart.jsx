import { FaTrashAlt } from "react-icons/fa";
import usecart from "../../../Hooks/usecart";
import usePublic from "../../../Hooks/usePublic";
import Swal from "sweetalert2";

const Cart = () => {
  const [cart, refetch] = usecart()
  const axiosPublic = usePublic()
  const totalPrice = cart.reduce((total, totalPrice) => total+ totalPrice.price, 0);
  const handleRemoveFood= (id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
       axiosPublic.delete(`/carts/${id}`)
       .then(res=>{
        if(res.data.acknowledged){
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Deleted Successfully",
            showConfirmButton: false,
            timer: 1500
          });
        }
        refetch()
        console.log(res)
       })
      }
    });
    console.log(id)
  }
 
    return (
      <div>
      <div className="flex gap-56 mt-10 ml-2">
        <h2>Cart Item:{cart.length}</h2>
        <h2>Total Price: $ {totalPrice}</h2>
        <button className="btn btn-primary px-5">Pay</button>
      </div>
      <div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #SL
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
        
       
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        cart.map((item, index)=>
          <tr>
        <th>
         {index + 1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item.image}
                  alt={item.name} />
              </div>
            </div>
           
          </div>
        </td>
        <td>
         {item.name}
         </td>
         <td>
         $ {item.price}
         </td>
        <th>
          <button onClick={()=>handleRemoveFood(item._id)} className="btn btn-ghost btn-xs">
            <FaTrashAlt className="text-xl text-orange-400"></FaTrashAlt>
          </button>
        </th>
      </tr>
        )
      }
      
     
    </tbody>
    
  </table>
</div>
      </div>
      </div>
    );
  };
  export default Cart;