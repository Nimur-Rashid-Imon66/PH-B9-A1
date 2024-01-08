import React from 'react';

const Footer = () => {
    return (
        <div className="bg-[#070211] ">
            <div className="flex flex-col pt-[120px] mx-auto max-w-screen-xl  ">
                <div className="flex items-center justify-between border-b-[1px] border-solid border-b-[#2C2834] pb-[50px]">
                    <div className="self-start flex text-[#fff] text-2xl font-medium font-inter">
                        44, Big Building Roosevelt Street<br />
                        Beach Gardens Florida 33410
                    </div>
                    <div className='pr-[135px]'>
                        <div className="flex items-center gap-4">
                            <img width='24px' height='24px' src="img/Call.png" alt="ccc" />
                            <span className="text-[#fff] text-2xl font-medium font-inter">+00 123 584 124</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <img width='24px' height='24px' src="img/Website.png" alt="www" />
                            <span className="text-[#fff] text-2xl font-medium font-inter">www.website.com</span>
                        </div>
                        <div />
                    </div>
                </div>
                <div className=" flex mx-auto gap-6 w-full items-center justify-center py-12 text-white border-b-[1px] border-solid border-b-[#2C2834]">

                    <img src="img/Facebook.png" alt="face" />
                    <img src="img/Instagram.png" alt="face" />
                    <img src="img/Twitter.png" alt="face" />
                    <img src="img/Linkedin.png" alt="face" />
                </div>

                <div className="flex items-center justify-between pt-[50px] pb-[120px]">
                    <div className="self-start flex text-[#fff] text-2xl font-medium font-inter">
                       2017, All Rights Reserved.
                    </div>
                    <div className='text-[#fff] text-2xl font-medium font-inter'>
                        Unsubscribe
                        <div />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;