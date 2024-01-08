import React from 'react';

const EventDetails = () => {
    return (
        <div className="mx-auto w-full h-[482px] rounded-xl bg-gradient-to-b from-[#FFE7E7] to-[#FFFEFE] flex flex-col items-center ">
            <div className="mx-auto mt-[100px] flex flex-col gap-1 items-center text-[#070211] text-[32px] font-inter font-semibold leading-[56px]">
                <span>
                    <span className="text-[#F00]">Place:</span> New Park Hotel
                </span>
                <span>
                <span className="text-[#F00]">Date:</span> 31 December Night 2023
                </span>
                <span>
                <span className="text-[#F00]">Time:</span> Evening 7.30 pm to 12.30 am
                </span>
            </div>
            <button className="max-w-[167px] text-[#FFF] text-[20px] font-inter font-[700] mt-12 px-8 py-4 rounded-lg bg-[#F00]">
                Join Now
            </button>
        </div>
    );
};

export default EventDetails;