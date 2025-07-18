import React, {useState} from "react";
import GetAllProducts from "./getAllProducts";
import GetSingleProduct from "./GetSingleProduct";
import CreatePost from "./CreatePost";
import GetAllPosts from "./GetAllPosts";


let tabs = ['Get all products', 'Get Single product', "Create Post","Get all posts"]

export default function TabComp(){
     const [selectedTab,setSelectedTab] = useState(0)
    return (
        <div className='container'>
        <ul className='row'>
            {tabs.map((v,i)=>{
                return <li key={i}onClick={e=>setSelectedTab(i)} className='col'>   {v}   </li>
        })}
        </ul>
        {selectedTab ==0 && <GetAllProducts />}
        {selectedTab ==1 && <GetSingleProduct />}
        {selectedTab ==2 && <CreatePost />}
        {selectedTab ==3 && <GetAllPosts />}
    </div>
    )
}