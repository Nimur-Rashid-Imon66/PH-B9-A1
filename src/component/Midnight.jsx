import React from 'react';

const Midnight = () => {
    return (
        <div className="relative mx-auto max-w-screen-xl  ">
            <div className="absolute flex items-center text-white w-full h-full bg-gradient-to-r from-[#070211] to-[#07021100] rounded-2xl pl-[126px]">
                <div className='flex flex-col justify-center '>
                    <h5 className="font-merri  text-[64px] font-[900] max-w-[642px] leading-[88px] ">Welcome to midnight party</h5>
                    <p
                        className="font-inter text-[#FFFFFFCC]text-[18px] font-normal max-w-[697px]  mt-6 leading-[30px]">Dolor sit amet consectetur. Consequat eget consectetur maecenas sed molestie malesuada. Ipsum sed sodales risus ut pellentesque vel euismod.
                    </p>
                    <span className="text-[#FFF] text-[20px] font-inter font-[700] mt-12 ml-8">
                         Join Now
                    </span>
                </div>
                <img className=" w-[320px] h-[465px]" src="img/Group 70.png" alt="" />
            </div>
            <img src="img/Vectorrr.png" alt="bnr" />
        </div>
    );
};

export default Midnight;