/* eslint-disable no-unused-vars */
import React from 'react'
import logo from '../assets/logo.png'
import { useState } from 'react'
import img1 from '../assets/327702975_1997247050482379_5376389102258123851_n.jpg'
import {MdOutlineArrowCircleRight} from 'react-icons/md'
const Book = () => {
    const [openBook,setOpenBook]=useState(false)
  return (
    <div className={`book ${openBook?'lg:ml-[450px] ml-0':'ml-[0px]'}  lg:w-[550px] w-[380px] h-[700px] relative bg-white `} id='book'>
        <div onClick={()=>setOpenBook(true)} className={`paper ${openBook?'flipped ':''}  absolute w-full h-full top-0 left-0  z-[1] `} id='p1' >
            <div className="front absolute w-full cursor-pointer h-full bg-[#f3f3f3] z-[1] border-l-[30px] border-[#0000000a]  ">
                <div className="front-content w-full p-[30px] h-full flex flex-col items-center justify-center">
                    <div className="img flex-[2]">
                        <img src={img1} alt=""  className='rounded-xl'/>
                    </div>
                    <div className="footer flex-1 w-[80%] flex items-center justify-between ">
                        <div className="website flex-1"><a className='text-[#56214d] text-bold' href="https://getsag.netlify.app/">GetsAgency.com</a></div>
                        <div onClick={()=>setOpenBook(true)} className="logo cursor-pointer w-full flex-1 rounded-md flex items-center justify-center bg-[#56214d] h-[70%]">
                            <img src={logo} alt="" className='w-[70%]' />
                            <span className='text-[40px] text-[#ffec00]'><MdOutlineArrowCircleRight/></span>
                            </div>
                    </div>
                </div>
            </div>
            <div className="back lg:block hidden absolute w-full  h-full bg-[#f3f3f3] z-0    ">
                <div className="back-content w-full h-full flex items-center justify-center">
                    <h1>back1</h1>
                </div>
            </div>
        </div>



        <div className="paper absolute w-full h-full top-0 left-0  z-[0] " id='p2' >
            <div className="front absolute w-full h-full bg-[#f3f3f3] z-[1] border-l-[30px] border-[#0000000a] ">
                <div className="front-content w-full h-full flex items-center justify-center">
                    <h1>front2</h1>
                </div>
            </div>
            <div className="back absolute w-full h-full bg-[#f3f3f3] z-0    ">
                <div className="back-content w-full h-full flex items-center justify-center">
                    <h1>back2</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Book