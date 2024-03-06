import React from "react";
import Flipkart from './Flipkart-Featured-1.webp';
import Styles from './app.module.css';
import flp from './flp.jpg';
const Home=()=>
{
    return(
        <div>
            <img src={Flipkart} className={Styles.fl}></img>
            <img src={flp} className={Styles.fll}></img>
            
            <p className={Styles.pass}>Flipkart is an Indian e-commerce company founded 15 years ago.
                 Headquartered in Bengaluru, the company has several subsidiaries today, 
                 including Myntra, Ekart, and PhonePe.
                 Flipkart Private Limited is an Indian e-commerce company, headquartered in 
                Bangalore, and incorporated in Singapore as a private limited company. 
                The company initially focused on online book sales before expanding into
                 other product categories such as consumer electronics, fashion, home essentials, groceries, 
                 and lifestyle products.
         The service competes primarily with Amazon India and domestic rival Snapdeal.
         As of March 2017, Flipkart held a 39.5% market share in the Indian e-commerce
          industry.Flipkart has a dominant position in the apparel segment, bolstered by its
           acquisition of Myntra, and was described as being "neck and neck" with Amazon in the
            sale of electronics and mobile phones.</p>

        </div>
    )
}
export default Home;