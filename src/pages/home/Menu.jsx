
import MenuItem from "../shared/MenuItem";
import useMenu from "../../Hooks/useMenu";
const Menu = () => {
   const [menu] = useMenu();
   const dessert = menu.filter(food=> food.category ===
    "dessert");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto">
        {dessert.map(item=>
          <MenuItem
          key={item._id}
          item={item}
          ></MenuItem>
        )}
    </div>
  );
};

export default Menu;