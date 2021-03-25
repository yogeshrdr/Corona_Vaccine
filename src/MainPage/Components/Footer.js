import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (

      <footer className="relative bg-blue-900 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-white">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-white ">
                Any Query for Covid Realted Problem contact Us
              </h5>


              <div className="mt-6 text-white font-bold">
                <p>Old Rajinder Nagar, New Rajinder Nagar,</p> <p> New Delhi, Delhi 110060</p>
                <p className="mt-10">Phone number : 1234567890</p>
                
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-white text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled text-white">
                  
                  <Link to ='/' className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm">Covid Track</Link>
                  <Link to ='/' className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm">FAQ's</Link>
                  <Link to ='/' className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm">Survey</Link>
                  <Link to ='/' className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm">Registration </Link>
                  
          
                  </ul>
                </div>


                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-white text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled text-white">
                  
                  
                  <Link to ='/' className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm">Covid Track</Link>
                  <Link to ='/' className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm">FAQ's</Link>
                  <Link to ='/' className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm">Survey</Link>
                  <Link to ='/' className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm">Registration </Link>
                  
                  </ul>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </footer>
     
    
  );
}


