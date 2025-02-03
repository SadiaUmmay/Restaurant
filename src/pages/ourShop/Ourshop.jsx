import CoverPage from "../shared/CoverPage";
import ourshop from "../../assets/shop/banner2.jpg"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/useMenu";
import OurShopTab from "../../components/OurShopTab";

const Ourshop = () => {
  const [menu] = useMenu()
  const drinks = menu.filter(food => food.category ===
    "drinks")
  const dessert = menu.filter(food => food.category ===
    "dessert")
  const pizza = menu.filter(food => food.category ===
    "pizza")
  const salad = menu.filter(food => food.category ===
    "salad")
  const soup = menu.filter(food => food.category ===
    "soup")
  console.log(drinks, dessert, pizza, salad, soup)
  return (
    <div>
      <CoverPage
        title="Our Shop"
        bannerImg={ourshop}
        heading="WOULD YOU LIKE TO TRY A DISH?"
      ></CoverPage>
      <Tabs className='max-w-7xl mx-auto'>
    <TabList className='flex justify-center my-3'>
      <Tab>Salad</Tab>
      <Tab>Pizza</Tab>
      <Tab>Soup</Tab>
      <Tab>Dessert</Tab>
      <Tab>Drink</Tab>
    </TabList>

    <TabPanel>
      <OurShopTab
      foods= {salad}
      ></OurShopTab>
    </TabPanel>
    <TabPanel>
    <OurShopTab
      foods= {pizza}
      ></OurShopTab>
    </TabPanel>
    <TabPanel>
    <OurShopTab
      foods= {dessert}
      ></OurShopTab>
    </TabPanel>
    <TabPanel>
    <OurShopTab
      foods= {soup}
      ></OurShopTab>
    </TabPanel>
    <TabPanel>
    <OurShopTab
      foods= {drinks}
      ></OurShopTab>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default Ourshop;