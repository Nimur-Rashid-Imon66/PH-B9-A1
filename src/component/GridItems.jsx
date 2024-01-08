import React from 'react';

const GridItems = () => {
    let img = [
        {
            id: 1,
            link:"img/Rectangle 3.png"
        },
        {
            id: 2,
            link:"img/Rectangle 4.png"
        },
        {
            id: 3,
            link:"img/Rectangle 5.png"
        },
        {
            id: 4,
            link:"img/Rectangle 6.png"
        },
        {
            id: 5,
            link:"img/Rectangle 7.png"
        },
        {
            id: 6,
            link:"img/Rectangle 8.png"
        },
    ]
    return (
        <div className="">
            <div className="flex flex-col justify-start items-start mb-12">
                <span className="text-[#F00] text-[24px] font-inter font-medium leading-normal">
                    THE BEST GIFTS
                </span>
                <span className="text-[#070211] text-[48px] font-merri font-[900] leading-normal mt-4 mb-[22px]">
                Our Awesome Portfolio
                </span>
                <span className="text-[#6A6770] text-[20px] font-inter w-[896px] font-[400] leading-8 ">
                    Dolor sit amet consectetur. Consequat eget consectetur maecenas sed molestie malesuada. Ipsum sed sodales risus ut pellentesque vel euismod.
                </span>
            </div>

            <div className='grid grid-cols-3 gap-6'>
                {
                    img.map((e) => {
                        return (
                             <img key={e.id} src={e.link} alt="xyz" /> 
                        )
                    })
                }
            </div>

        </div>
    );
};

export default GridItems;