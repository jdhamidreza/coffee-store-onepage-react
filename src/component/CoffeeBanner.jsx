import React from 'react';
import img1 from "../assets/img/coffee_bean.png";
import img2 from "../assets/img/cup.png";
import img3 from "../assets/img/why-banner.png";



const CoffeeBanner = () => {
    return (
        <div
            className='relative w-full h-[300px] sm:h-[600px] lg:h-[400px]
        text-white flex justify-center items-center 
        '
            alt="Coffee banner"
            style={{ backgroundImage: `url(${img3})` }} >

            <div className='absolute left-20 top-1/2 text-center transform -translate-y-1/2 sm:w-[70%] md:w-[50%]
            lg:w-[40%] p-4 sm:text-left
            ' >

                <h4 className='text-xl sm:text-4xl text-white font-bold mb-4' >Start Your Morning Amazing</h4>
                <p className='text-sm sm:text-base text-gray-200 mb-6 ' >With every sip, taste the flavor of life; coffee with unique aroma and energizing.
                    From the first moment to the last drop, make your day special with us. Our coffee,
                    your constant companion for happy moments.</p>

                <button className='mx-2 bg-cream px-4 py-2 rounded-3xl text-gray-950  shadow-sm shadow-cream border-none' >
                    Place Order
                </button>
            </div>

            <img src={img1}
                alt='Coffee beans'
                className='absolute hidden sm:block right-0 bottom-0  w-[60vh] h-[68vh]'
            />

            <img src={img2}
                alt='Coffee cup'
                className='absolute hidden sm:block right-[120px] bottom-0  w-[35vh] '
            />

        </div>
    );
}

export default CoffeeBanner;
