import React from 'react';

const Banner1 = () => {
    return (
        <div className="relative mx-auto max-w-screen-xl  ">
            <div className="absolute text-white w-full flex flex-col items-center justify-center h-full bg-gradient-to-b from-[#070211] to-[#07021100] rounded-2xl">
            <h5 className="font-merri text-center text-[32px] font-normal  ">Happy New Year</h5>
            <h1 className="font-merri text-center text-[72px] font-black max-w-[632px]  mt-4 leading-[95px]">New Year Party Celebration</h1>
            </div>
            <img src="img/Banner Image.png" alt="bnr" />
        </div>
    );
};

export default Banner1;