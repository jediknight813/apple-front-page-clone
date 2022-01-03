import React from "react";
import '../styles/ContentStyles.css'

function Content() {

    
    return(
        <div className="content_container">

            <div className="main_image">
                <img alt="main pic" src="https://turbulentpanda.github.io/appleHomepageClone/assets/hero.jpg"/>
                
                <div style={{display: "flex", flexDirection: "column", position: "absolute", top: "19%", left: "10%", width: "80%", justifyContent: "center", alignItems: "center"}}>
                    <h1 style={{fontFamily: "Helvetica Neue", fontWeight: "100", color: "White", fontSize: "70px"}}> What will your verse be? </h1>          
                    <h1 style={{fontFamily: "Helvetica Neue", fontWeight: "100", color: "White", fontSize: "33px", marginTop: "-34px"  }}> Everyone has something to share. See how people are using </h1>          
                    <h1 style={{fontFamily: "Helvetica Neue", fontWeight: "100", color: "White", fontSize: "33px", marginTop: "-20px"  }}> iPad in their unique ways to add to the world's story. </h1>          
                    <a href=" "> Watch the "Your Verse" film and explore the stories <i class="fa fa-play-circle"></i> </a>
                </div>
                
            </div>

            <div className="iphone_images">
                <img alt="promo1" src="https://web.archive.org/web/20140301004610im_/http://images.apple.com/home/images/promo_iphone5s.jpg" />
                <img alt="promo2" src="https://web.archive.org/web/20140301004610im_/http://images.apple.com/home/images/promo_iphone5c.jpg" />
                <img alt="promo3" src="https://web.archive.org/web/20140301004610im_/http://images.apple.com/home/images/promo_30_years.jpg" />
                <img alt="promo4"src="https://web.archive.org/web/20140301004610im_/http://images.apple.com/home/images/promo_supplier_responsibility.jpg" />
            </div>

        </div>
    )
}

export default Content