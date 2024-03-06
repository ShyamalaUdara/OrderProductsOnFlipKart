import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Styles from './app.module.css';
import { Link } from "react-router-dom";
const Order=()=>
{
    const { id } = useParams();
 const [state, setState] = useState([]);
 const [num,setnum]=useState(1);
     useEffect(() => {
      axios
      .get('https://fakestoreapi.com/products/'+id)
       .then((res) => {
          setState(res.data);
          console.log(res);
        })
        .catch((err) => console.log(err));
    }, [id]);
    
    const incr=()=>
    {
        setnum(num+1);
    }
    const decr=()=>
    {
        if(num>1)
        {
        setnum(num-1);
        }
    }
    
    return(
        <div >
          <center>
            <form >
              <div className={Styles.b}>
            <img className={Styles.img1} src={state.image} alt="/"></img>
            <p>{state.title}</p>
            <h2>price:{state.price}</h2>
            <button type="button" className={Styles.bu}onClick={decr}>-</button>
            {num}
            <button type="button" className={Styles.bu} onClick={incr}>+</button>
            <p>Total price:{state.price * num}</p>
            <button className={Styles.pro}><Link to={`/Profile/${state.id}`}>Proceed</Link></button>&nbsp;&nbsp;
            </div>
          </form>
         
            </center>
      </div>
    )
}
export default Order;