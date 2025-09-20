import React from 'react';
import coffeeImg from "../assets/img/banner.png"
import coffeeBlast from "../assets/img/coffee_blast.png"



const Banner = () => {
    return (
        <div className='relative  mt-[15vh] flex flex-col items-center  md:flex-row  ' >
            {/*Img Section */}
            <div className='flex justify-center md:w-1/2 '  >
                <img
                    className='w-[60%] h-[auto] object-contain'
                    src={coffeeImg}
                    alt='Corner Cafe'
                />
            </div>
            {/*Content Section */}
            <div className='text-center ml-5 md:text-left p-4 md:w-1/2' >
                <h2 className='text-2xl md:3xl lg:text-4xl text-amber-950 mb-5' >Looking for the Best Coffee</h2>
                <p className='text-sm md:text-base ml-60px lg:text-lg text-gray-600 mb-6' >Coffee is one of the world's most popular beverages, 
                    made from coffee plant beans.
                     This drink with its unique aroma and taste has been an inseparable part 
                    of people's daily lives around the world for centuries. In addition to being energizing,
                     coffee is rich in antioxidants that can have benefits for heart
                     and brain health. Coffee preparation methods are diverse; 
                    from thick and energetic espresso to drip
                     and Turkish coffee, each with its own unique taste and characteristics.
                     This drink is not only known as a way to start the day,
                     but also as an opportunity to enjoy and relax.</p>
                     <button  className='mx-2 bg-cream px-4 py-2 rounded-3xl text-gray-950  shadow-sm shadow-cream border-none' >
                            Place Order
                    </button>
            </div>
            {/*blast Section */}
            <div className='absolute left-0 bottom-[-50px] md:bottom-[-100px] ' >
                <img className='w-[30vh] lg:w-[50vh] '  src={coffeeBlast} alt="Coffee decoration" />
            </div>

        </div>
    );
}

export default Banner;
