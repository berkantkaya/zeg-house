/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

const Footer = () => {

  return (
    <div className='bg-black lg:h-60 flex items-center justify-between p-3 md:p-5'>
      <div className='flex flex-col items-center space-y-4'>
      <p className='text-white'>Sosyal Medya Hesaplarımız</p>
      <div className='flex space-x-2 cursor-pointer ml-1'>
        <a target='_blank' href='https://www.facebook.com/Zeg-House-100265415970479'><img src="/assets/zeg-images/facebook.png" alt="" /></a>
        <a target='_blank' href='https://www.instagram.com/zeghouse/'><img src="/assets/zeg-images/instagram.png" alt="" /></a>
        {/* <img src="/assets/zeg-images/twitter.png" alt="" />
        <img src="/assets/zeg-images/youtube.png" alt="" />
        <img src="/assets/zeg-images/linkedin.png" alt="" /> */}
      </div> 
      </div>
        
        <a target='_blank' href='https://nerasocial.com'>
      <img className='w-24 md:w-48 mt-4 cursor-pointer' src="/assets/zeg-images/bynera.png" alt="" />    
      </a>
    </div>
  )
}

export default Footer