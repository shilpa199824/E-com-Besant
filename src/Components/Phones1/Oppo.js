import React from 'react'
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

import '../Cart2.css';

import oppoA3 from '../images2/oppoA3.jpg';
import oppoF23 from '../images2/oppoF23.jpg';
import oppoF27pro from '../images2/oppoF27pro.jpg';
import opporeno11 from '../images2/opporeno11.jpg';
import oppoA3x from '../images2/oppoA3x.jpg';
import oppoA15 from '../images2/oppoA15.jpg';
import oppoF27 from '../images2/oppoF27.jpg';
import oppoN3 from '../images2/oppoN3.jpg';
import opporeno10 from '../images2/opporeno10.jpg';
import opporeno12 from '../images2/opporeno12.jpg';

const Oppo = () => {
    return(
        <div className="container">
            <div className="row gx-5 gy-5 my-3">
            <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={oppoA3} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">oppo A3 5G (128GB)</h5>
                        <pre className="price"> ₹15,999 <spam className="linethrough">₹19,999 </spam> <spam className="red">20% Off</spam><br/> 
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={oppoF23} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">oppo F23 5G (256GB)</h5>
                        <pre className="price"> ₹20,694 <spam className="linethrough">₹28,999 </spam> <spam className="red">29% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={oppoF27pro} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">oppo F27 Pro+ 5G (128GB)</h5>
                        <pre className="price"> ₹25,999 <spam className="linethrough">₹32,999 </spam> <spam className="red">21% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={opporeno11} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">oppo Reno11 Pro 5G (256GB)</h5>
                        <pre className="price"> ₹37,994 <spam className="linethrough">₹44,999 </spam> <spam className="red">16% Off</spam><br/>   
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarHalf /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={oppoA3x} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">oppo A3x 5G (128GB)</h5>
                        <pre className="price"> ₹12,499 <spam className="linethrough">₹13,499 </spam> <spam className="red">7% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarHalf /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={ oppoA15} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">oppo A15s (64GB)</h5>
                        <pre className="price"> ₹9,990 <spam className="linethrough">₹13,990</spam> <spam className="red">29% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={oppoF27} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">oppo F27 Pro+ 5G (128GB)</h5>
                        <pre className="price"> ₹25,999 <spam className="linethrough">₹32,999 </spam> <spam className="red">21% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={ oppoN3} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">oppo Find N3 Flip 5G</h5>
                        <pre className="price"> ₹69,994 <spam className="linethrough">₹99,999 </spam> <spam className="red">30% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={ opporeno10} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">oppo Reno 10 Pro 5G</h5>
                        <pre className="price"> ₹34,199 <spam className="linethrough">₹44,999 </spam> <spam className="red">24% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarHalf /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={ opporeno12} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">oppo Reno 12 Pro 5G</h5>
                        <pre className="price"> ₹40,999 <spam className="linethrough">₹55,999 </spam> <spam className="red">27% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
            </div>
        </div>

    )
}

export default Oppo;