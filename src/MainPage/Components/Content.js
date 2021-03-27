import React from 'react'
import c1 from '../images/c1.jpg';
import content1 from '../images/1.svg';
import content2 from '../images/2.svg';
import content3 from '../images/3.svg';
import Cont from './Content/Cont';

const Content = () => {
    return (
        <>
        
        <div className="container  mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
              alt="..."
              className="max-w-full rounded-lg shadow-lg"
              src={c1}
            />
          </div>
          
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-yellow-400">
                <i className="fas fa-rocket text-xl"></i>
              </div>
              <h3 className="text-3xl font-bold">
                What is CO-VMS
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Co-VMS is a platform for the citizens of India to Register for COVID-19 vaccination and schedule their vaccination slots at the nearest vaccination centers.
              </p>
            </div>
          </div>
          </div>
          </div>

      
          <div className="bg-yellow-400">
          <div className="container mx-auto px-4 lg:pt-20 lg:pb-20 bg-yellow-400">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-gray-900">
                How it Works
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blue-900">
                Know how to book your appointment
                </p>
              </div>
            </div>


            <div className="flex flex-wrap mt-12 justify-center">
             
             <Cont image = {content1} head={"REGISTER YOURSELF"} line={" Register using your Mobile no. or Aadhaar no. or any other Identity docs."}/>
             <Cont image = {content2} head={"CHOOSE VACCINE LOCATION"} line={"  Some quick example text to build on the card title and make up the bulk of the card's content."}/> 
             <Cont image = {content3} head={"Launch time"} line={"  Some quick example text to build on the card title and make up the bulk of the card's content."}/>
              
            </div>
          </div>
          </div>
          </>
    )
}

export default Content;