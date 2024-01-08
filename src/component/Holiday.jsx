import React from 'react';

const Holiday = () => {
    return (
        <div className="mx-auto">
            <div className="flex flex-col items-center mb-[64px]">
                <span className="text-black text-[24px] font-inter font-medium leading-normal">
                    WHAT IS FUNCTIONAL
                </span>
                <h1
                    className="font-merri text-[#F00] text-[72px] font-black  mt-4 mb-7 leading-[95px]">Holidays
                    <span className="text-black "> Sale 50% </span>
                </h1>
                <span className="text-[#6A6770] text-[20px] font-inter font-[500] leading-8 text-center w-[1024px]">
                    Dolor sit amet consectetur. Consequat eget consectetur maecenas sed<br />
                    molestie malesuada. Ipsum sed sodales risus ut pellentesque vel euismod. Eleifend nunc purus quam id fermentum amet amet sit consectetur.
                </span>
            </div>
            <div className="relative flex justify-end ">
                <img className="absolute left-0 w-[796px] h-[663px] shadow-lg" src="img/Group 76.png" alt="HappyNewYear" />
                <div className="">
                    <img className="absolute right-[275px] top-[15%]" src="img/Group 44.png" alt="HappyNewYear" />
                    <img className="" src="img/Rectangle 1.png" alt="HappyNewYear" />
                </div>
            </div>

            <img src="img/Rectangle 2.png" alt="HappyNewYear" />

        </div>
    );
};

export default Holiday;