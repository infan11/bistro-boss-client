import orderImg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from '../Menu/Shared/Cover/Cover';
import UseMenu from '../../Hooks/UseMenu';
import { useState } from 'react';
import OederTab from './/OrderTab/OederTab';
import { useParams } from 'react-router-dom';


const OrderFood = () => {
  const categoris = ["Salad","pizza", "soup ", "desserts", "drinks"];
  const {category}= useParams()
  const initalIndex = categoris.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initalIndex);
    const [menu] = UseMenu();





    const salad = menu.filter(item => item.category === "salad")
    console.log(salad);
    const drinks = menu.filter(item => item.category === "drinks")
    const desserts = menu.filter(item => item.category === "desserts")
    console.log(desserts);
    const soup = menu.filter(item => item.category === "soup")
    const pizza = menu.filter(item => item.category === "pizza")

    return (
        <div>
            <Cover img={orderImg} title="Order Food"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                
    <TabList>
      <Tab>Salad</Tab>
      <Tab>Pizza</Tab>
      <Tab>Soup</Tab>
      <Tab>Desserts</Tab>
      <Tab>Drinks</Tab>
     
    </TabList>
    <TabPanel><OederTab items={salad}></OederTab></TabPanel>
    <TabPanel><OederTab items={pizza}></OederTab></TabPanel>
   <TabPanel><OederTab items={soup}></OederTab></TabPanel> 
   <TabPanel><OederTab items={desserts}></OederTab></TabPanel>
   <TabPanel><OederTab items={drinks}></OederTab></TabPanel>
  
  
  </Tabs>
        </div>
    );
};

export default OrderFood;