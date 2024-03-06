import axios from "axios";
import React, { useEffect, useState } from "react";
import Styles from './app.module.css'
import { Link } from "react-router-dom";
const Products=()=>
{
    let[state,setState]=useState(null);
    useEffect(()=>
    {
        axios.get("https://fakestoreapi.com/products").then((res)=>
        {
            setState(res.data)
        }).catch((err)=>console.log(err))
    })
    return(
    <div>
        {state==null?"loading...":state.map((d)=>
        {
            return(
                <div >
                    <div className={Styles.r}>
                    <div className={Styles.r1}>
                 <div key={d.id}>
                  <p>{d.catagory}</p>
                  <p>{d.title}</p>
                 <p>{d.price}</p>
                 <p>{d.rating.rate}</p>
                <button className={Styles.r4}><Link to={`/Cart/${d.id}`}>Add to Cart</Link></button>
                <img className={Styles.r2} src={d.image} alt="/"></img>
                 </div>
                 </div>
                 </div>
                 </div>
                
           
             );
        })} 
    </div>
    )
}
export default Products;