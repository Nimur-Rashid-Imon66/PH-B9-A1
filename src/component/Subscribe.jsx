import React from 'react';

const Subscribe = () => {
    return (
        <div className="mx-auto w-full h-[482px] rounded-xl bg-gradient-to-b from-[#FFE7E7] to-[#f6f1f1] flex flex-col items-center justify-center mb-[120px]">
            <img src="img/Group 61.png" alt="xyz" />
            <span className="text-center text-[#070211] text-[48px] font-merri font-[900] leading-normal mt-4 mb-[22px]">
            Subscribe Newsletter
            </span>
            <span className="text-center text-[#6A6770] text-[20px]  font-inter font-[400] leading-8 ">
                Dolor sit amet consectetur. Consequat eget consectetur maecenas sed molestie malesuada.<br />
                 Ipsum sed sodales risus ut pellentesque vel euismod.
            </span>

            <div className="flex w-[648px] mt-12 justify-between bg-[#ffffff] h-[72px] items-center rounded-[50px]  shadow-sm">
                <span className="text-center text-[#B5B4B8] text-[18px]  font-inter font-[400] leading-normal h-[72px] pl-[30px] py-6 rounded-l-[50px] ">user@gmail.com</span>
                <span className="text-center text-[#fff] text-[20px]  font-inter font-[600] leading-normal bg-[#F00] h-[72px] px-[56px] py-6 rounded-r-[50px] ">Subscribe</span>
            </div>
        </div>
    );
};

export default Subscribe;