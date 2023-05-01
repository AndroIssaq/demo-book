/* eslint-disable react/display-name */
import HTMLFlipBook from 'react-pageflip';
import img1 from '../assets/327702975_1997247050482379_5376389102258123851_n.jpg'
import {MdOutlineArrowCircleRight} from 'react-icons/md'
import logo from '../assets/logo.png'
import React from 'react';
const Page = React.forwardRef((props, ref) => {
    return (
        <div className="demoPage  bg-slate-200" ref={ref}>
            <div className="front-content w-full border-l-[30px] border-[#0000000a]   h-full flex flex-col items-center justify-center">
                    <div className="img flex-[2]">
                        <img src={props.img} alt=""  className='rounded-xl'/>
                    </div>
                    <div className="footer flex-1 w-[80%] flex items-center justify-between ">
                        <div className="website flex-1"><a className='text-[#56214d] text-bold' href="https://getsag.netlify.app/">GetsAgency.com</a></div>
                        <div  className="logo cursor-pointer w-full flex-1 rounded-md flex items-center justify-center bg-[#56214d] h-[70%]">
                            <img src={logo} alt="" className='w-[70%]' />
                            <span className='text-[40px] text-[#ffec00]'><MdOutlineArrowCircleRight/></span>
                            </div>
                    </div>
                </div>

            <p>Page number: {props.number}</p>
        </div>
    );
});

function MyBook(props) {
    return (
        <HTMLFlipBook width={550} height={700}>
            <Page number="1" img={img1}>Page text</Page>
            <Page number="2" >Page text</Page>
            <Page number="3">Page text</Page>
            <Page number="4">Page text</Page>
        </HTMLFlipBook>
    );
}
export default MyBook