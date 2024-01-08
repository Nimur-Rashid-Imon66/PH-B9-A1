import React from 'react';

const BestOffer = () => {
    return (
        <div className="mx-auto w-full  flex  items-center ">
            <div className="flex flex-col items-start mr-[70px]">
                <span className="text-[#F00] text-[24px] font-inter font-medium leading-normal">
                    NEW BEST OFFER
                </span>
                <span className="text-[#070211] text-[48px] font-merri font-[900] leading-normal mt-4 mb-[22px]">
                    Coming Soon
                </span>
                <span className="text-[#6A6770] text-[20px] w-[400px] font-inter font-[400] leading-8 ">
                    Dolor sit amet consectetur. Consequat eget consectetur maecenas sed molestie malesuada. Ipsum sed sodales risus ut pellentesque vel euismod.
                </span>
            </div>
            <img className=" border-[15px] rounded-[50%] p-[50px] border-[#f00]" src="img/Ellipse 1.png" alt="" />

            <div className="flex flex-col gap-1 items-start max-w-[276px] ml-[118px]">
                <span className="text-[#F00] text-[48px] font-inter font-bold leading-normal">
                    2024
                </span>
                <span className="w-[276px] text-[#6A6770] text-[20px] font-inter font-[400] leading-8 mb-[42px]">
                Dolor sit amet consectetur. Consequat eget consectetur maecenas sed.
                </span>
                <img src="img/Group 96.png" alt="" />

            </div>
        </div>
    );
};

export default BestOffer;