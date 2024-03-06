import React from 'react'
import order123 from './order123.png';
import Styles from './app.module.css';
const Portal=()=>
{
    return(
        <div>
           <img src={order123} className={Styles.ddr}></img>
        </div>
    )
}
export default Portal;