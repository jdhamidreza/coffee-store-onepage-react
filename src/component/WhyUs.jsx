import React from 'react';
import WhyImg1 from "../assets/img/why-1.png"
import WhyImg2 from "../assets/img/why-2.png"
import WhyImg3 from "../assets/img/why-3.png"
import WhyImg4 from "../assets/img/why-4.png"
import coffeeBlast from "../assets/img/coffee_blast-2.png"



const WhyUs = () => {
    return (
        <div className='relative' >
                <div>
                    <img src={coffeeBlast} className='absolute top-[-100px] w-[30vh] lg:w-[50vh]' alt="Coffee decoration" />
                </div>

            <div className=' p-5 max-w-6xl mx-auto' >

                    <div className='text-center p-4' >
                        <h2 className='text-4xl text-amber-950' >Why Corner Cafe?</h2>
                        <p className='text-sm text-gray-600' > Make your day with Corner Cafe!</p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6' >
                            <div className='bg-[#FFF9F1] flex flex-col justify-center items-center px-2 py-4 mx-2 my-4 rounded-md border border-amber-500' >
                                <img src={WhyImg1} alt="Royal coffee beans" />
                                <h4 className='text-2xl text-amber-900' >Royal Coffee</h4>
                                <p className='text-gray-700 text-sm' >With golden beans</p>
                            </div>
                            <div className='bg-[#FFF9F1] flex flex-col justify-center items-center px-2 py-4 mx-2 my-4 rounded-md border border-amber-500' >
                                <img src={WhyImg2} alt="High quality" />
                                <h4 className='text-2xl text-amber-900' >High Quality</h4>
                                <p className='text-gray-700 text-sm' >We provide the best quality</p>
                            </div>
                            <div className='bg-[#FFF9F1] flex flex-col justify-center items-center px-2 py-4 mx-2 my-4 rounded-md border border-amber-500' >
                                <img src={WhyImg3} alt="Amazing coffee" />
                                <h4 className='text-2xl text-amber-900' >Amazing</h4>
                                <p className='text-gray-700 text-sm' >Experience amazing coffee</p>
                            </div>
                            <div className='bg-[#FFF9F1] flex flex-col justify-center items-center px-2 py-4 mx-2 my-4 rounded-md border border-amber-500' >
                                <img src={WhyImg4} alt="Affordable price" />
                                <h4 className='text-2xl text-amber-900 my-2' >Affordable Price</h4>
                                <p className='text-gray-700 text-sm my-4' >Best coffee at the lowest price!</p>
                            </div>
                            
                    </div>
                    <div className='text-center p-4 my-8' >
                    <p className='text-gray-700 text-sm my-2' >The best ideas start with the best coffee</p>
                        <h4 className='text-3xl text-amber-950 my-2' >Start Today</h4>
                    
                        <button  className='mx-2 bg-cream px-4 py-2 rounded-3xl text-gray-950  shadow-sm shadow-cream border-none my-8' >
                             Join Us
                    </button>
                    </div>
            </div>
        </div>
    );
}

export default WhyUs;
