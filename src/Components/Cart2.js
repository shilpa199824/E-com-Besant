import React from 'react'
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

import '../Components/Cart2.css';
// iphone
import AppleiPhone16 from './images2/Apple iPhone16.jpg';
import AppleiPhone15 from './images2/Apple iPhone 15.jpg';
import iphone16pro from './images2/iphone16 pro.jpg';
import iphone15plus from './images2/iphone15 plus.jpg';
import iphone15promax from './images2/Appleiphone15promax.jpg';
import iphone16pink from './images2/Apple iphone16 pink.jpg';
import iphone16pro1 from './images2/Apple16pro.jpg';
import Apple14 from './images2/Apple 14.jpg';
import Apple13 from './images2/Apple 13.jpg';
import iphone14 from './images2/iphone14.jpg';

// samsung
import samsunggalaxyS24 from './images2/samsung galaxyS24.jpg';
import samsungZflip from './images2/samsung Zflip.jpg';
import samsungZfold from './images2/samsung Zfold.jpg';
import samsungA35 from './images2/samsungA35.jpg';
import samsungA23 from './images2/samsungA23 5G.jpg';
import samsungF15 from './images2/samsungF15.jpg';
import samsungM14 from './images2/samsungM14.jpg';
import samsungM55 from './images2/samsungM55.jpg';
import samsungS23 from './images2/samsungS23.jpg';
import samsungZfold5 from './images2/samsungZfold5.jpg';

// oneplus
import oneplus125G from './images2/oneplus 12 5G.jpg';
import oneplusnord4 from './images2/oneplus nord 4 5G.jpg';
import oneplusnordce3 from './images2/oneplus nord CE3 5G.jpg';
import oneplusnordce4 from './images2/oneplus nord CE4 5G.jpg';
import oneplus3 from './images2/oneplus3.jpg';
import oneplus12R from './images2/oneplus12R.jpg';
import oneplusCE2 from './images2/oneplusCE2.jpg';
import oneplusNord3 from './images2/oneplusNord3.jpg';
import oneplus12R5G from './images2/oneplus12R5G.jpg';
import oneplusCE3 from './images2/oneplusCE3.jpg';

// vivo
import vivoV40e from './images2/vivoV40e.jpg';
import vivoY300 from './images2/vivoY300 5G.jpg';
import vivoV40 from './images2/vivoV40.jpg';
import vivoY58 from './images2/vivoY58.jpg';
import vivoV30 from './images2/vivoV30.jpg';
import vivoY28e from './images2/vivoY28e.jpg';
import vivoY585G from './images2/vivoY58 5G.jpg';
import vivoY18 from './images2/vivoY18.jpg';
import vivoV405G from './images2/vivoV40 5G.jpg';
import vivoY28 from './images2/vivoY28.jpg';

// redmi
import redmiA3 from './images2/redmiA3.jpg';
import redminote13pro from './images2/redminote13pro.jpg';
import redminote14pro from './images2/redminote14pro.jpg';
import redminote14proplus from './images2/redminote14proplus.jpg';
import redmi13 from './images2/redmi13.jpg';
import redmi12 from './images2/redmi12.jpg';
import redmiN13 from './images2/redmiN13.jpg';
import redmiN12 from './images2/redmiN12.jpg';
import redmiN14 from './images2/redmiN14.jpg';
import redmiN13pro from './images2/redmiN13pro.jpg';

// oppo
import oppoA3 from './images2/oppoA3.jpg';
import oppoF23 from './images2/oppoF23.jpg';
import oppoF27pro from './images2/oppoF27pro.jpg';
import opporeno11 from './images2/opporeno11.jpg';
import oppoA3x from './images2/oppoA3x.jpg';
import oppoA15 from './images2/oppoA15.jpg';
import oppoF27 from './images2/oppoF27.jpg';
import oppoN3 from './images2/oppoN3.jpg';
import opporeno10 from './images2/opporeno10.jpg';
import opporeno12 from './images2/opporeno12.jpg';

// googel
import google1 from './images2/google1.jpg';
import google2 from './images2/google2.jpg';
import google3 from './images2/google3.jpg';
import google4 from './images2/google4.jpg';
import google5 from './images2/google5.jpg';
import google6 from './images2/google6.jpg';
import google7 from './images2/google7.jpg';
import google8 from './images2/google8.jpg';
import google9 from './images2/google9.jpg';
import google10 from './images2/google10.jpg';

// realme
import realme1 from './images2/realme1.jpg';
import realme2 from './images2/realme2.jpg';
import realme3 from './images2/realme3.jpg';
import realme4 from './images2/realme4.jpg';
import realme5 from './images2/realme5.jpg';
import realme6 from './images2/realme6.jpg';
import realme7 from './images2/realme7.jpg';
import realme8 from './images2/realme8.jpg';
import realme9 from './images2/realme9.jpg';
import realme10 from './images2/realme10.jpg';




const Cart2 = () => {
  return (
    <div className="container">
         <div className="row gx-5 gy-5 my-3">
{/*Iphone  */}
        <div className="col-sm-7 col-md-3 col-lg-3"> 
                 <div class="card">
                  <div className="p1"><a href='#'><img src={AppleiPhone16} class="card-img-top" alt="..." height={"265px"}/></a></div>
                     <div class="card-body">
                       <h5 class="card-title">Apple iPhone 16 (256GB,Teal)</h5> 
                         <pre className="price"> ₹84,900 <spam className="linethrough">₹89,900 </spam> <spam className="red">6% Off</spam><br/>
                         <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>       
                         <a href="#" class="btn btn-warning btn-sm ">Add to cart</a>  <a href="#" class="btn btn-primary btn-sm">Buy Now</a>
                  
                     </div>
                 </div>
            </div>
            <div className="col-sm-7 col-md-3 col-lg-3"> 
                 <div class="card">
                     <div className="p1"><a href='#'><img src={AppleiPhone15} class="card-img-top" alt="..." height={"265px"}/></a></div>
                     <div class="card-body">
                         <h5 class="card-title">Apple iPhone 15 (128GB,Black)</h5>
                         <pre className="price"> ₹64,900 <spam className="linethrough">₹69,900 </spam> <spam className="red">7% Off</spam><br/>
                       <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarHalf /></div></pre> 
                         <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm">Buy Now</a>
                     </div>
                 </div>
            </div>
            <div className="col-sm-7 col-md-3 col-lg-3"> 
                 <div class="card">
                     <div className="p1"><a href='#'><img src={iphone16pro} class="card-img-top" alt="..."  height={"265px"}/></a></div>
                     <div class="card-body">
                         <h5 class="card-title">Apple iPhone 16 Pro (128GB)</h5>
                         <pre className="price"> ₹1,12,900 <spam className="linethrough">₹1,19,900 </spam> <spam className="red">6% Off</spam><br/>  
                         <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div></pre>      
                         <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm">Buy Now</a>
                     </div>
                 </div>
          </div>
            <div className="col-sm-7 col-md-3 col-lg-3"> 
                 <div class="card">
                    <div className="p1"><a href='#'><img src={iphone15plus} class="card-img-top" alt="..." height={"265px"}/></a></div>
                     <div class="card-body">
                         <h5 class="card-title">Apple iPhone 15 Plus (256GB)</h5>
                     <pre className="price"> ₹74,900 <spam className="linethrough">₹79,900 </spam> <spam className="red">6% Off</spam><br/>  
                         <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div></pre>
                         <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm">Buy Now</a>
                     </div>
                 </div>
            </div>
            <div className="col-sm-7 col-md-3 col-lg-3"> 
                 <div class="card">
                     <div className="p1"><a href='#'><img src={ iphone15promax} class="card-img-top" alt="..." height={"265px"}/></a></div>
                     <div class="card-body">
                         <h5 class="card-title">Apple iPhone 15 Pro Max</h5>
                         <pre className="price"> ₹1,49,900 <spam className="linethrough">₹1,54,900 </spam> <spam className="red">6% Off</spam><br/>  
                         <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                     <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm">Buy Now</a>
                     </div>
                 </div>
            </div>
            <div className="col-sm-7 col-md-3 col-lg-3"> 
                 <div class="card">
                     <div className="p1"><a href='#'><img src={iphone16pink} class="card-img-top" alt="..." height={"265px"}/></a></div>
                     <div class="card-body">
                         <h5 class="card-title">Apple iPhone 16 (256GB, Pink)</h5>
                         <pre className="price"> ₹84,900 <spam className="linethrough">₹89,900 </spam> <spam className="red">6% Off</spam><br/>  
                         <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                         <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm">Buy Now</a>
                     </div>
                 </div>
            </div>
            <div className="col-sm-7 col-md-3 col-lg-3"> 
                 <div class="card">
                     <div className="p1"><a href='#'><img src={iphone16pro1} class="card-img-top" alt="..." height={"265px"}/></a></div>
                     <div class="card-body">
                         <h5 class="card-title">Apple iPhone 16 Pro Max </h5>
                         <pre className="price"> ₹1,57,900 <spam className="linethrough">₹1,64,900 </spam> <spam className="red">4% Off</spam><br/>  
                         <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm">Buy Now</a>
                     </div>
                </div>
           </div>
            <div className="col-sm-7 col-md-3 col-lg-3"> 
                 <div class="card">
                     <div className="p1"><a href='#'><img src={Apple14} class="card-img-top" alt="..." height={"265px"}/></a></div>
                     <div class="card-body">
                         <h5 class="card-title">Apple iPhone 14 (128GB,Starlight)</h5>
                         <pre className="price"> ₹51,490 <spam className="linethrough">₹59,900 </spam> <spam className="red">14% Off</spam><br/>  
                         <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div></pre>
                         <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm">Buy Now</a>
                     </div>
                 </div>
            </div>
            <div className="col-sm-7 col-md-3 col-lg-3"> 
                 <div class="card">
                    <div className="p1"><a href='#'><img src={Apple13} class="card-img-top" alt="..." height={"265px"}/></a></div>
                     <div class="card-body">
                         <h5 class="card-title">Apple iPhone 13 (128GB,Blue)</h5>
                         <pre className="price"> ₹46,400 <spam className="linethrough">₹49,900 </spam> <spam className="red">7% Off</spam><br/>  
                         <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarHalf /></div></pre>
                         <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm">Buy Now</a>
                     </div>
                 </div>
           </div>
            <div className="col-sm-7 col-md-3 col-lg-3"> 
                 <div class="card">
                     <div className="p1"><a href='#'><img src={iphone14} class="card-img-top" alt="..." height={"265px"}/></a></div>
                     <div class="card-body">
                         <h5 class="card-title">Apple iPhone 14 (256GB, Red)</h5>
                         <pre className="price"> ₹52,994 <spam className="linethrough">₹69,900 </spam> <spam className="red">24% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarHalf /></div></pre>
                         <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm">Buy Now</a>
                     </div>
                </div>
            </div> 

{/* Samsung */}
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={samsunggalaxyS24} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">SAMSUNG Galaxy S24 Ultra 5G</h5>
                        <pre className="price"> ₹1,21,999 <spam className="linethrough">₹1,34,999</spam> <spam className="red">10% Off</spam><br/>
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarHalf /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm">Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={samsungZflip} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">SAMSUNG Galaxy Z Flip5 5G </h5>
                        <pre className="price"> ₹99,999 <spam className="linethrough">₹1,02,999 </spam> <spam className="red">3% Off</spam><br/> 
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm">Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={samsungZfold} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">SAMSUNG Galaxy Z Fold6 5G</h5>
                        <pre className="price"> ₹1,61,999 <spam className="linethrough">₹1,64,999 </spam> <spam className="red">3% Off</spam><br/>   
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm">Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card ">
                    <div className="p1"><a href='#'><img src={samsungA35} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">SAMSUNG Galaxy A35 5G</h5>
                        <pre className="price"> ₹33,999 <spam className="linethrough">₹36,999 </spam> <spam className="red">8% Off</spam><br/>
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarHalf /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card ">
                    <div className="p1"><a href='#'><img src={samsungA23} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">SAMSUNG Galaxy A23 5G</h5>
                        <pre className="price"> ₹19,199 <spam className="linethrough">₹30,990 </spam> <spam className="red">38% Off</spam><br/>
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card ">
                    <div className="p1"><a href='#'><img src={samsungF15} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">SAMSUNG Galaxy F15 5G </h5>
                        <pre className="price"> ₹13,499 <spam className="linethrough">₹16,999 </spam> <spam className="red">21% Off</spam><br/>
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card ">
                    <div className="p1"><a href='#'><img src={samsungM14} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">SAMSUNG Galaxy M14 </h5>
                        <pre className="price"> ₹8,999 <spam className="linethrough">₹12,999 </spam> <spam className="red">31% Off</spam><br/>
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card ">
                    <div className="p1"><a href='#'><img src={samsungS23} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">SAMSUNG Galaxy S23 5G</h5>
                        <pre className="price"> ₹64,999 <spam className="linethrough">₹89,999 </spam> <spam className="red">28% Off</spam><br/>
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card ">
                    <div className="p1"><a href='#'><img src={samsungM55} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">SAMSUNG Galaxy M55 5G</h5>
                        <pre className="price"> ₹29,999 <spam className="linethrough">₹31,999 </spam> <spam className="red">6% Off</spam><br/>
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card ">
                    <div className="p1"><a href='#'><img src={samsungZfold5} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">SAMSUNG Galaxy Z Fold5 5G</h5>
                        <pre className="price"> ₹1,84,999 <spam className="linethrough">₹1,89,999 </spam> <spam className="red">3% Off</spam><br/>
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>

{/* Oneplus */}
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

{/* Vivo */}
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={vivoV40e} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">vivo V40e 5G (128GB)</h5>
                        <pre className="price"> ₹26,999 <spam className="linethrough">₹33,999 </spam> <spam className="red">21% Off</spam><br/>
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={vivoY300} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">vivo Y300 5G (128GB)</h5>
                        <pre className="price"> ₹21,999 <spam className="linethrough">₹26,999 </spam> <spam className="red">3% Off</spam><br/>
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={vivoV40} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">vivo V40 5G (256GB)</h5>
                        <pre className="price"> ₹36,999 <spam className="linethrough">₹41,999 </spam> <spam className="red">12% Off</spam><br/>
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={vivoY58} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">vivo Y58 5G (128GB)</h5>
                        <pre className="price"> ₹17,499 <spam className="linethrough">₹20,499 </spam> <spam className="red">15% Off</spam><br/>
                         <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                         <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={vivoV30} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">vivo V30 5G (128GB)</h5>
                        <pre className="price"> ₹29,999 <spam className="linethrough">₹38,999 </spam> <spam className="red">23% Off</spam><br/>
                         <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /><IoMdStarOutline /></div></pre>
                         <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={vivoY28e} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">vivo Y28e 5G (128GB)</h5>
                        <pre className="price"> ₹11,499 <spam className="linethrough">₹11,99 </spam> <spam className="red">4% Off</spam><br/>
                         <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /><IoMdStarOutline /></div></pre>
                         <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={vivoY585G} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">vivo Y58 5G (128GB)</h5>
                        <pre className="price"> ₹17,499 <spam className="linethrough">₹20,499 </spam> <spam className="red">15% Off</spam><br/>
                         <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarHalf /></div></pre>
                         <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={vivoY18} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">vivo Y18 (128GB)</h5>
                        <pre className="price"> ₹9,499 <spam className="linethrough">₹12,99 </spam> <spam className="red">27% Off</spam><br/>
                         <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                         <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={vivoV405G} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">vivo V40 5G (256GB)</h5>
                        <pre className="price"> ₹36,999 <spam className="linethrough">₹41,999 </spam> <spam className="red">12% Off</spam><br/>
                         <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /><IoMdStarOutline /></div></pre>
                         <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={vivoY28} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">vivo Y28e 5G (128GB)</h5>
                        <pre className="price"> ₹11,499 <spam className="linethrough">₹11,499 </spam> <spam className="red"> 4% Off</spam><br/>
                         <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                         <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>

{/* Redmi */}
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

{/* Oppo */}
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

{/* googlepixel */}
            <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={google1} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">Google Pixel 8a 5G</h5>
                        <pre className="price"> ₹37,999 <spam className="linethrough">₹52,999 </spam> <spam className="red">28% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={google2} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">Google Pixel 8a 5G</h5>
                        <pre className="price"> ₹37,999 <spam className="linethrough">₹52,999 </spam> <spam className="red">28% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={google3} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">Google Pixel 9 Pro 5G</h5>
                        <pre className="price"> ₹79,199 <spam className="linethrough">₹1,09,999 </spam> <spam className="red">28% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarHalf /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={google4} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">Google Pixel 8 5G</h5>
                        <pre className="price"> ₹59,999 <spam className="linethrough">₹75,999 </spam> <spam className="red">21% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={google5} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">Google Pixel 9 5G</h5>
                        <pre className="price"> ₹74,999 <spam className="linethrough">₹79,999 </spam> <spam className="red">6% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={google6} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">Google Pixel 8 Pro 5G</h5>
                        <pre className="price"> ₹89,999 <spam className="linethrough">₹1,06,999</spam> <spam className="red">16% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={google7} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">Google Pixel 8a 5G</h5>
                        <pre className="price"> ₹37,999 <spam className="linethrough">₹52,999 </spam> <spam className="red">28% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={google8} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">Google Pixel 9 Pro Fold 5G</h5>
                        <pre className="price"> ₹1,72,999 <spam className="linethrough">₹1,84,999</spam> <spam className="red">6% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarHalf /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={google9} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">Google Pixel 8 5G</h5>
                        <pre className="price"> ₹59,999 <spam className="linethrough">₹75,999 </spam> <spam className="red">21% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={google10} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">Google Pixel 9 5G</h5>
                        <pre className="price"> ₹74,999 <spam className="linethrough">₹79,999 </spam> <spam className="red">6% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>

{/* realme */}
            <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={realme1} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">realme C63 (128GB)</h5>
                        <pre className="price"> ₹8,999 <spam className="linethrough">₹10,009 </spam> <spam className="red">10% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={realme2} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">realme 13 Plus 5G (128GB)</h5>
                        <pre className="price"> ₹20,999 <spam className="linethrough">₹25,999 </spam> <spam className="red">19% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={realme3} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">realme 14x 5G (128GB)</h5>
                        <pre className="price"> ₹14,999 <spam className="linethrough">₹16,999 </spam> <spam className="red">12% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStarHalf /><IoMdStarOutline /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={realme4} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">realme GT 6T 5G (256GB)</h5>
                        <pre className="price"> ₹32,999 <spam className="linethrough">₹35,999 </spam> <spam className="red">8% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarHalf /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={realme5} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">realme 13 Plus 5G (256GB)</h5>
                        <pre className="price"> ₹22,999 <spam className="linethrough">₹27,999 </spam> <spam className="red">18% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={realme6} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">realme C53 (128GB)</h5>
                        <pre className="price"> ₹8,994 <spam className="linethrough">₹19,999 </spam> <spam className="red">55% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={realme7} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">realme C31 (32GB)</h5>
                        <pre className="price"> ₹10,999 <spam className="linethrough">₹12,099 </spam> <spam className="red">9% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar/><IoMdStar/></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={realme8} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">realme C31 (32GB)</h5>
                        <pre className="price"> ₹10,999 <spam className="linethrough">₹12,099 </spam> <spam className="red">9% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar/></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={realme9} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">realme 12x 5G (128GB)</h5>
                        <pre className="price"> ₹14,999 <spam className="linethrough">₹19,999 </spam> <spam className="red">25% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>
           <div className="col-sm-7 col-md-3 col-lg-3"> 
                <div class="card">
                    <div className="p1"><a href='#'><img src={realme10} class="card-img-top" alt="..." height={"265px"}/></a></div>
                    <div class="card-body">
                        <h5 class="card-title">realme C61 (128GB)</h5>
                        <pre className="price"> ₹8,499 <spam className="linethrough">₹9,999 </spam> <spam className="red">15% Off</spam><br/>  
                        <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline/><IoMdStarOutline /></div></pre>
                        <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
                    </div>
                </div>
           </div>








        </div>
    </div>
  )
}

export default Cart2;