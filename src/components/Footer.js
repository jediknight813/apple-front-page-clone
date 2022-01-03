import React from "react";
import '../styles/FooterStyles.css'


function Footer() {


    return (
        <div className="footer_container">

            <div className="footer_items">

                <div className="footer_items_top"> 
                    <h1> Shop the <a href="# "> Apple Online Store</a>  (1-800-MY-APPLE), visit an <a href=" ">Apple Retail Store </a>, or find a <a href=" "> reseller </a>. </h1>
                    <a className="a_tag" href=" "> Site Map | Hot News | RSS Feeds | Media Info | Enviroment | Job Opportunities | Contact Us </a>
                </div>

                <div className="footer_items_bottom">
                    <h1> Copyright © 2014 Apple Inc. All rights reserved. <a href=" ">Terms of Use </a> | <a href=" ">Privacy Policy</a> </h1>
                </div>
            </div>

        </div>
    )
}


export default Footer