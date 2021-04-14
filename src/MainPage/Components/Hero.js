import React from "react";
import { Link } from "react-router-dom";
import bg from '../images/background.jpg';

const Hero = () => {
  return (
    <div className="relative  flex content-center items-center justify-center bg-blue-800"
    style={{
      minHeight: "100vh"
    }}>
      <div className="absolute  w-full h-full bg-center bg-cover">
        <img className ="absolute  w-full h-full bg-center bg-cover" src={bg} alt="background"/>
            <span className="w-full h-full  opacity-25 bg-black pb-0"></span>
          </div>

          <div className="container relative mx-auto pb-0">
              <div className="items-center flex flex-wrap">
                <div className="w-full relative lg:w-6/12 px-4 text-center top:5  xl:top-10 ">
                  <div className="pr-12 ">

                    <h1 className="text-white font-semibold text-5xl">
                      Start Your Vaccination
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                    </p>
                    
                    <Link to='/users/user'><button class="m-8 bg-yellow-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-4xl">Register for vaccine </button></Link> 
                   
                  </div>
                  
                </div>
              </div>
          </div>
    </div>
  );
};

export default Hero;
