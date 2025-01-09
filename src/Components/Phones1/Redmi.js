import React from 'react'
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

import '../Cart2.css';

import redmiA3 from '../images2/redmiA3.jpg';
import redminote13pro from '../images2/redminote13pro.jpg';
import redminote14pro from '../images2/redminote14pro.jpg';
import redminote14proplus from '../images2/redminote14proplus.jpg';
import redmi13 from '../images2/redmi13.jpg';
import redmi12 from '../images2/redmi12.jpg';
import redmiN13 from '../images2/redmiN13.jpg';
import redmiN12 from '../images2/redmiN12.jpg';
import redmiN14 from '../images2/redmiN14.jpg';
import redmiN13pro from '../images2/redmiN13pro.jpg';


const Redmi = () =>{
    return(
        <div className="container">
             <div className="row gx-5 gy-5 my-3">
             <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={redmiA3} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">Redmi A3 (128GB)</h5>
                        <pre className="price"> ₹9,294 <spam className="linethrough">₹20,999 </spam> <spam className="red">56% Off</spam><br/>   
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarHalf /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={redminote13pro} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">Redmi Note 13 Pro+ 5G</h5>
                        <pre className="price"> ₹28,999 <spam className="linethrough">₹37,999 </spam> <spam className="red">24% Off</spam><br/> 
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={redminote14pro} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">Redmi Note 14 Pro 5G (256GB)</h5>
                        <pre className="price"> ₹26,999 <spam className="linethrough">₹30,999 </spam> <spam className="red">13% Off</spam><br/>
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={redminote14proplus} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">Redmi Note 14 Pro Plus 5G</h5>
                        <pre className="price"> ₹35,999 <spam className="linethrough">₹39,999 </spam> <spam className="red">10% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={redmi13} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">Redmi 13 5G (128GB)</h5>
                        <pre className="price"> ₹14,499 <spam className="linethrough">₹20,999 </spam> <spam className="red">31% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={redmi12} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">Redmi 12 5G (128GB)</h5>
                        <pre className="price"> ₹12,499 <spam className="linethrough">₹14,499</spam> <spam className="red">14% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={redmiN13} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">Redmi Note 13 Pro Plus 5G</h5>
                        <pre className="price"> ₹26,999 <spam className="linethrough">₹37,999</spam> <spam className="red">29% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarHalf /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={ redmiN12} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">Redmi Note 12 Pro 5G</h5>
                        <pre className="price"> ₹20,394 <spam className="linethrough">₹27,999 </spam> <spam className="red">27% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={redmiN14} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">Redmi Note 14 5G(128GB)</h5>
                        <pre className="price"> ₹19,999 <spam className="linethrough">₹22,999 </spam> <spam className="red">13% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={redmiN13pro} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">Redmi Note 13 Pro 5G</h5>
                        <pre className="price"> ₹19,999 <spam className="linethrough">₹28,999 </spam> <spam className="red">31% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarHalf /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>

             </div>
        </div>
    )
}

export default Redmi;