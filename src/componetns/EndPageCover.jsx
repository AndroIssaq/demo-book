/* eslint-disable react/display-name */
import React from "react";
import logo from '../assets/logo.png'
const EndPageCover = React.forwardRef((props, ref) => {

return (
  <div className="page page-cover end-page-cover  relative cursor-pointer" id='page-cover' ref={ref} data-density="hard">
    <div className='absolute z-[100] w-[90%] h-[50%] left-0  top-0 pink__gradient'></div>
    <div className='absolute  right-0 w-[80%] h-[50%] bottom-0 white__gradient'></div>
    <div className="page-content flex flex-col items-center justify-center ">
      <div className="logo w-[80%] h-[50%] border-[10px] border-white flex items-center justify-center "><img src={logo} alt="" className=' object-cover' /></div>
      <span className='p-[30px] mt-[40px] w-full flex items-start justify-start'><a href="https://getsag.netlify.app/" className='text-[#fff]'>www.GetsAgency.com</a></span>
    </div>
  </div>
);
});

export default EndPageCover