import React from 'react'
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

import '../Cart2.css';

import AppleiPhone16 from '../images2/Apple iPhone16.jpg';
import AppleiPhone15 from '../images2/Apple iPhone 15.jpg';
import iphone16pro from '../images2/iphone16 pro.jpg';
import iphone15plus from '../images2/iphone15 plus.jpg';
import iphone15promax from '../images2/Appleiphone15promax.jpg';
import iphone16pink from '../images2/Apple iphone16 pink.jpg';
import iphone16pro1 from '../images2/Apple16pro.jpg';
import Apple14 from '../images2/Apple 14.jpg';
import Apple13 from '../images2/Apple 13.jpg';
import iphone14 from '../images2/iphone14.jpg';


const Iphone = () => {
    return (
        <div className="container">
            <div className="row gx-5 gy-5 my-3">
                <div className="col-sm-7 col-md-3 col-lg-3">
                    <div class="card">
                        <div className="p1"><a href='#'><img src={AppleiPhone16} class="card-img-top" alt="..." height={"265px"} /></a></div>
                        <div class="card-body">
                            <h5 class="card-title">Apple iPhone 16 (256GB,Teal)</h5>
                            <pre className="price"> ₹84,900 <spam className="linethrough">₹89,900 </spam> <spam className="red">6% Off</spam><br />
                                <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                            <a href="#" class="btn btn-warning btn-sm ">Add to cart</a>  <a href="#" class="btn btn-primary btn-sm">Buy Now</a>

                        </div>
                    </div>
                </div>
                <div className="col-sm-7 col-md-3 col-lg-3">
                    <div class="card">
                        <div className="p1"><a href='#'><img src={AppleiPhone15} class="card-img-top" alt="..." height={"265px"} /></a></div>
                        <div class="card-body">
                            <h5 class="card-title">Apple iPhone 15 (128GB,Black)</h5>
                            <pre className="price"> ₹64,900 <spam className="linethrough">₹69,900 </spam> <spam className="red">7% Off</spam><br />
                                <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarHalf /></div></pre>
                            <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-7 col-md-3 col-lg-3">
                    <div class="card">
                        <div className="p1"><a href='#'><img src={iphone16pro} class="card-img-top" alt="..." height={"265px"} /></a></div>
                        <div class="card-body">
                            <h5 class="card-title">Apple iPhone 16 Pro (128GB)</h5>
                            <pre className="price"> ₹1,12,900 <spam className="linethrough">₹1,19,900 </spam> <spam className="red">6% Off</spam><br />
                                <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div></pre>
                            <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-7 col-md-3 col-lg-3">
                    <div class="card">
                        <div className="p1"><a href='#'><img src={iphone15plus} class="card-img-top" alt="..." height={"265px"} /></a></div>
                        <div class="card-body">
                            <h5 class="card-title">Apple iPhone 15 Plus (256GB)</h5>
                            <pre className="price"> ₹74,900 <spam className="linethrough">₹79,900 </spam> <spam className="red">6% Off</spam><br />
                                <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div></pre>
                            <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-7 col-md-3 col-lg-3">
                    <div class="card">
                        <div className="p1"><a href='#'><img src={iphone15promax} class="card-img-top" alt="..." height={"265px"} /></a></div>
                        <div class="card-body">
                            <h5 class="card-title">Apple iPhone 15 Pro Max</h5>
                            <pre className="price"> ₹1,49,900 <spam className="linethrough">₹1,54,900 </spam> <spam className="red">6% Off</spam><br />
                                <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                            <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-7 col-md-3 col-lg-3">
                    <div class="card">
                        <div className="p1"><a href='#'><img src={iphone16pink} class="card-img-top" alt="..." height={"265px"} /></a></div>
                        <div class="card-body">
                            <h5 class="card-title">Apple iPhone 16 (256GB, Pink)</h5>
                            <pre className="price"> ₹84,900 <spam className="linethrough">₹89,900 </spam> <spam className="red">6% Off</spam><br />
                                <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                            <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-7 col-md-3 col-lg-3">
                    <div class="card">
                        <div className="p1"><a href='#'><img src={iphone16pro1} class="card-img-top" alt="..." height={"265px"} /></a></div>
                        <div class="card-body">
                            <h5 class="card-title">Apple iPhone 16 Pro Max </h5>
                            <pre className="price"> ₹1,57,900 <spam className="linethrough">₹1,64,900 </spam> <spam className="red">4% Off</spam><br />
                                <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
                            <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-7 col-md-3 col-lg-3">
                    <div class="card">
                        <div className="p1"><a href='#'><img src={Apple14} class="card-img-top" alt="..." height={"265px"} /></a></div>
                        <div class="card-body">
                            <h5 class="card-title">Apple iPhone 14 (128GB,Starlight)</h5>
                            <pre className="price"> ₹51,490 <spam className="linethrough">₹59,900 </spam> <spam className="red">14% Off</spam><br />
                                <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div></pre>
                            <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-7 col-md-3 col-lg-3">
                    <div class="card">
                        <div className="p1"><a href='#'><img src={Apple13} class="card-img-top" alt="..." height={"265px"} /></a></div>
                        <div class="card-body">
                            <h5 class="card-title">Apple iPhone 13 (128GB,Blue)</h5>
                            <pre className="price"> ₹46,400 <spam className="linethrough">₹49,900 </spam> <spam className="red">7% Off</spam><br />
                                <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarHalf /></div></pre>
                            <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-7 col-md-3 col-lg-3">
                    <div class="card">
                        <div className="p1"><a href='#'><img src={iphone14} class="card-img-top" alt="..." height={"265px"} /></a></div>
                        <div class="card-body">
                            <h5 class="card-title">Apple iPhone 14 (256GB, Red)</h5>
                            <pre className="price"> ₹52,994 <spam className="linethrough">₹69,900 </spam> <spam className="red">24% Off</spam><br />
                                <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarHalf /></div></pre>
                            <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Iphone;


