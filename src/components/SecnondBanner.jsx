import React from 'react';
import imageOne from './../assets/home/chef-service.jpg'

const SecnondBanner = () => {
    return (
        <div className='relative' >
           <img src={imageOne} alt="" className='absolute' />
           <div className='bg-white text-center max-w-5xl mx-auto border md:py-24 md:px-40 absolute lg:top-20  lg:left-32  '>
           <h3 className='text-5xl'> Bistro Boss</h3>
           <p className='max-w-3xl mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis suscipit ab, illo molestiae deleniti maiores provident in ducimus placeat modi temporibus quis quisquam consequatur id!</p>
           </div>
        </div>
    );
};

export default SecnondBanner