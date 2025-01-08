import React from 'react'
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import '../Cart2.css';
import samsunggalaxyS24 from '../images2/samsung galaxyS24.jpg';
import samsungZflip from '../images2/samsung Zflip.jpg';
import samsungZfold from '../images2/samsung Zfold.jpg';
import samsungA35 from '../images2/samsungA35.jpg';
import samsungA23 from '../images2/samsungA23 5G.jpg';
import samsungF15 from '../images2/samsungF15.jpg';
import samsungM14 from '../images2/samsungM14.jpg';
import samsungM55 from '../images2/samsungM55.jpg';
import samsungS23 from '../images2/samsungS23.jpg';
import samsungZfold5 from '../images2/samsungZfold5.jpg';

const Samsung = () => {
  return (
    <div className="container">
      <div className="row gx-5 gy-5 my-3">
        <div className="col-sm-7 col-md-3 col-lg-3">
          <div class="card">
            <div className="p1"><a href='#'><img src={samsunggalaxyS24} class="card-img-top" alt="..." height={"265px"} /></a></div>
            <div class="card-body">
              <h5 class="card-title">SAMSUNG Galaxy S24 Ultra 5G</h5>
              <pre className="price"> ₹1,21,999 <spam className="linethrough">₹1,34,999</spam> <spam className="red">10% Off</spam><br />
                <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarHalf /><IoMdStarOutline /></div></pre>
              <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm">Buy Now</a>
            </div>
          </div>
        </div>
        <div className="col-sm-7 col-md-3 col-lg-3">
          <div class="card">
            <div className="p1"><a href='#'><img src={samsungZflip} class="card-img-top" alt="..." height={"265px"} /></a></div>
            <div class="card-body">
              <h5 class="card-title">SAMSUNG Galaxy Z Flip5 5G </h5>
              <pre className="price"> ₹99,999 <spam className="linethrough">₹1,02,999 </spam> <spam className="red">3% Off</spam><br />
                <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
              <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm">Buy Now</a>
            </div>
          </div>
        </div>
        <div className="col-sm-7 col-md-3 col-lg-3">
          <div class="card">
            <div className="p1"><a href='#'><img src={samsungZfold} class="card-img-top" alt="..." height={"265px"} /></a></div>
            <div class="card-body">
              <h5 class="card-title">SAMSUNG Galaxy Z Fold6 5G</h5>
              <pre className="price"> ₹1,61,999 <spam className="linethrough">₹1,64,999 </spam> <spam className="red">3% Off</spam><br />
                <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /><IoMdStarOutline /></div></pre>
              <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm">Buy Now</a>
            </div>
          </div>
        </div>
        <div className="col-sm-7 col-md-3 col-lg-3">
          <div class="card ">
            <div className="p1"><a href='#'><img src={samsungA35} class="card-img-top" alt="..." height={"265px"} /></a></div>
            <div class="card-body">
              <h5 class="card-title">SAMSUNG Galaxy A35 5G</h5>
              <pre className="price"> ₹33,999 <spam className="linethrough">₹36,999 </spam> <spam className="red">8% Off</spam><br />
                <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarHalf /><IoMdStarOutline /></div></pre>
              <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
            </div>
          </div>
        </div>
        <div className="col-sm-7 col-md-3 col-lg-3">
          <div class="card ">
            <div className="p1"><a href='#'><img src={samsungA23} class="card-img-top" alt="..." height={"265px"} /></a></div>
            <div class="card-body">
              <h5 class="card-title">SAMSUNG Galaxy A23 5G</h5>
              <pre className="price"> ₹19,199 <spam className="linethrough">₹30,990 </spam> <spam className="red">38% Off</spam><br />
                <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /><IoMdStarOutline /></div></pre>
              <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
            </div>
          </div>
        </div>
        <div className="col-sm-7 col-md-3 col-lg-3">
          <div class="card ">
            <div className="p1"><a href='#'><img src={samsungF15} class="card-img-top" alt="..." height={"265px"} /></a></div>
            <div class="card-body">
              <h5 class="card-title">SAMSUNG Galaxy F15 5G </h5>
              <pre className="price"> ₹13,499 <spam className="linethrough">₹16,999 </spam> <spam className="red">21% Off</spam><br />
                <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div></pre>
              <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
            </div>
          </div>
        </div>
        <div className="col-sm-7 col-md-3 col-lg-3">
          <div class="card ">
            <div className="p1"><a href='#'><img src={samsungM14} class="card-img-top" alt="..." height={"265px"} /></a></div>
            <div class="card-body">
              <h5 class="card-title">SAMSUNG Galaxy M14 </h5>
              <pre className="price"> ₹8,999 <spam className="linethrough">₹12,999 </spam> <spam className="red">31% Off</spam><br />
                <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div></pre>
              <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
            </div>
          </div>
        </div>
        <div className="col-sm-7 col-md-3 col-lg-3">
          <div class="card ">
            <div className="p1"><a href='#'><img src={samsungS23} class="card-img-top" alt="..." height={"265px"} /></a></div>
            <div class="card-body">
              <h5 class="card-title">SAMSUNG Galaxy S23 5G</h5>
              <pre className="price"> ₹64,999 <spam className="linethrough">₹89,999 </spam> <spam className="red">28% Off</spam><br />
                <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
              <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
            </div>
          </div>
        </div>
        <div className="col-sm-7 col-md-3 col-lg-3">
          <div class="card ">
            <div className="p1"><a href='#'><img src={samsungM55} class="card-img-top" alt="..." height={"265px"} /></a></div>
            <div class="card-body">
              <h5 class="card-title">SAMSUNG Galaxy M55 5G</h5>
              <pre className="price"> ₹29,999 <spam className="linethrough">₹31,999 </spam> <spam className="red">6% Off</spam><br />
                <div className="star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /></div></pre>
              <a href="#" class="btn btn-warning btn-sm">Add to cart</a> <a href="#" class="btn btn-primary btn-sm" >Buy Now</a>
            </div>
          </div>
        </div>
        <div className="col-sm-7 col-md-3 col-lg-3">
        </div>
      </div>
    </div>
  )
}

export default Samsung
