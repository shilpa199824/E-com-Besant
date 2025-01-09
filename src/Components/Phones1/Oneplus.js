import React from 'react'
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

import '../Cart2.css';

import oneplus125G from '../images2/oneplus 12 5G.jpg';
import oneplusnord4 from '../images2/oneplus nord 4 5G.jpg';
import oneplusnordce3 from '../images2/oneplus nord CE3 5G.jpg';
import oneplusnordce4 from '../images2/oneplus nord CE4 5G.jpg';
import oneplus3 from '../images2/oneplus3.jpg';
import oneplus12R from '../images2/oneplus12R.jpg';
import oneplusCE2 from '../images2/oneplusCE2.jpg';
import oneplusNord3 from '../images2/oneplusNord3.jpg';
import oneplus12R5G from '../images2/oneplus12R5G.jpg';
import oneplusCE3 from '../images2/oneplusCE3.jpg';

const Oneplus = () =>{
    return(
        <div className="container">
             <div className="row gx-5 gy-5 my-3">
             <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={oneplus125G} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">OnePlus 12 5G (12GB)</h5>
                        <pre className="price"> ₹59,999 <spam className="linethrough"> ₹64,999 </spam> <spam className="red">3% Off</spam><br/>
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm">Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={oneplusnord4 } class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">OnePlus Nord 4 5G (128GB)</h5>
                        <pre className="price"> ₹32,999 <spam className="linethrough">₹35,999 </spam> <spam className="red">8% Off</spam><br/> 
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm">Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={oneplusnordce3 } class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">OnePlus Nord CE3 5G (128GB)</h5>
                        <pre className="price"> ₹22,999 <spam className="linethrough">₹27,999  </spam> <spam className="red">3% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm">Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={oneplusnordce4 } class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">OnePlus Nord CE4 Lite 5G</h5>
                        <pre className="price"> ₹20,999 <spam className="linethrough">₹23,999 </spam> <spam className="red">13% Off</spam><br/> 
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={oneplus3} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">OnePlus Nord 3 5G</h5>
                        <pre className="price"> ₹28,994 <spam className="linethrough">₹33,999 </spam> <spam className="red">15% Off</spam><br/> 
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={oneplus12R } class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">OnePlus 12R 5G (256GB)</h5>
                        <pre className="price"> ₹45,999 <spam className="linethrough">₹50,999 </spam> <spam className="red">3% Off</spam><br/> 
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={oneplusCE2 } class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">OnePlus Nord CE2 Lite 5G</h5>
                        <pre className="price"> ₹17,994 <spam className="linethrough">₹19,999 </spam> <spam className="red">10% Off</spam><br/> 
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={ oneplusNord3 } class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">OnePlus Nord 3 5G</h5>
                        <pre className="price"> ₹28,999 <spam className="linethrough">₹33,999 </spam> <spam className="red">15% Off</spam><br/> 
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={oneplus12R5G } class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">OnePlus 12R 5G (256GB,Grey)</h5>
                        <pre className="price"> ₹45,999 <spam className="linethrough">₹50,999 </spam> <spam className="red">3% Off</spam><br/> 
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={ oneplusCE3} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">OnePlus Nord CE 3 Lite 5G</h5>
                        <pre className="price"> ₹18,499 <spam className="linethrough">₹21,999 </spam> <spam className="red">16% Off</spam><br/> 
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
             </div>
        </div>
    )
}

export default Oneplus;