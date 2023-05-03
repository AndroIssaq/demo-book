/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState,useEffect } from 'react';
/* eslint-disable react/display-name */
import HTMLFlipBook from 'react-pageflip';
import logo from '../assets/logo.png'
import logo2 from '../assets/gets-removebg-preview.png'
import {PageFlip} from 'page-flip';
import video1 from '../assets/Sequence 01 (1).mp4' 
import video2 from '../assets/WhatsApp Video 2023-04-12 at 1.59.27 PM.mp4' 
import Servent from '../assets/334969121_582146777177395_358755000486760050_n.png'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'
import project4 from '../assets/project4.jpg'
import ostaCover from '../assets/osta/osta.jpg'
import osta1 from '../assets/osta/332878116_6225296800834988_1200083483679446818_n.jpg'
import osta2 from '../assets/osta/332886273_721692446372524_1899162140114096547_n.jpg'
import osta3 from '../assets/osta/332897338_5659453820843541_5322062552614486434_n.jpg'
import osta4 from '../assets/osta/333239559_1393429754814161_1134770241085535825_n.jpg'
import BuildersCover from '../assets/Builders Developments/cover.png'
import Builderimg1 from '../assets/Builders Developments/img1.jpg' 
import Builderimg2 from '../assets/Builders Developments/img2.jpg'
import Builderimg3 from '../assets/Builders Developments/img3.jpg'
import Builderimg4 from '../assets/Builders Developments/img4.jpg'
import Builderimg5 from '../assets/Builders Developments/img5.jpg'
import Builderimg6 from '../assets/Builders Developments/img6.jpg'
import serventCover from '../assets/Servenet/cover.jpg'
import serventimg1 from '../assets/Servenet/img1.png'
import serventimg2 from '../assets/Servenet/img2.png'
import serventimg3 from '../assets/Servenet/img3.png'
import serventimg4 from '../assets/Servenet/img4.png'
import flipSound from '../assets/page-flip-01a.mp3' 
const ipadSize=window.innerWidth
const mobSize=window.innerWidth


const PageCover = React.forwardRef((props, ref) => {

    return (
      <div className="page shadow-xl page-cover  relative cursor-pointer" id='page-cover' ref={ref} data-density="hard">
        <div className='absolute z-[100] w-[90%] h-[50%] left-0  top-0 pink__gradient'></div>
        <div className='absolute  right-0 w-[80%] h-[50%] bottom-0 white__gradient'></div>
        <div className="page-content flex flex-col items-center justify-center ">
          <div className="logo w-full h-full flex items-center justify-center"><img src={logo} alt="" className=' object-cover' /></div>
          <span><a href="https://getsag.netlify.app/" className='text-[#fff]'>www.GetsAgency.com</a></span>
        </div>
      </div>
    );
  });
  
  
  const Page1 = React.forwardRef((props, ref) => {
    return (
      <div className="page overflow-y-scroll page1 relative shadow-xl" ref={ref} data-density="hard" >
      
        <div className="page-content flex items-center gap-[20px] ">
          <div className="left flex-1  flex flex-col gap-[20px] items-center justify-center h-full">
            <div className="video1">
            <video autoPlay muted loop className=''>
            <source src={props.video1}  />
            </video>
            </div>
            <div className="video2">
            <video autoPlay muted loop className=''>
            <source src={props.video2}  />
            </video>
            </div>
            <div className='w-full flex items-start justify-start flex-col'>
            <div className="logo"><img src={logo2} alt="" className='w-[150px]' /></div>
            <h1 className='text-[#ffec00] font-bold  lg:text-[20px] md:text-[18px] text-[15px]'>Gets Agency</h1>
            <p className=' lg:text-[12px] md:text-[12px] text-[6px] '>We are not just an advertising agency, </p>
            <p className=' lg:text-[12px] md:text-[12px] text-[6px]'>but more than that we have a creative team, </p>
            <p className=' lg:text-[12px] md:text-[12px] text-[6px]'>that has many bright ideas,</p>
            </div>
            
          </div>

          <div className="right flex-1  ">
            <div className='header flex flex-col items-start justify-start '>
              <h1 className='title text-[12px] font-bold'>Gets Agency / Fetured Projects</h1>
              <h1 className='content text-[25px] font-semibold  text-[#56214d] '>Content</h1>
              <p className='text-[12px] text-ellipsis overflow-hidden ...'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="projects  flex flex-col items-start justify-start mt-[20px] h-full gap-[10px]">
              <div className="project  overflow-hidden text-ellipsis lg:flex-row md:flex-row flex-col  flex items-center gap-[10px]">
                  <div className="img flex-1"><img src={Servent} alt="" /></div>
                  <div className="des flex-1   ">
                    <h1 className="name  lg:text-[15px] md:text-[15px] text-[10px] font-bold">SERVENET</h1>
                    <p className='    lg:text-[12px] md:text-[12px] text-[6px] font-extralight'>🔥 Our Latest 🔥 Branding for Servnet We are so glad to be part of this success </p>
                  </div>
              </div>
          
              <div className="project lg:flex-row md:flex-row flex-col flex items-center gap-[10px]">
                  <div className="img flex-1"><img src={project2} alt="" /></div>
                  <div className="des flex-1  ">
                    <h1 className="name lg:text-[15px] md:text-[15px] text-[10px] font-bold">MOTAWERON</h1>
                    <p className='lg:text-[12px]  md:text-[12px] text-[6px] font-extralight'>🔥 Our Outdoor Campaign for o-court mall developed by Motawroon developmentThe </p>
                  </div>
              </div>

              <div className="project lg:flex-row md:flex-row flex-col flex items-center gap-[10px]">
                  <div className="img flex-1"><img src={project3} alt="" /></div>
                  <div className="des flex-1 ">
                    <h1 className="name lg:text-[15px] md:text-[15px] text-[10px] font-bold">HELMY</h1>
                    <p className='lg:text-[12px] md:text-[12px] text-[6px] font-extralight'>🔥 Our Proud to debut a spectacular brands launch in the market, check out our latest with Helmy Furniture.</p>
                  </div>
              </div>

          
              <div className="project lg:flex-row md:flex-row flex-col flex items-center gap-[10px]">
                  <div className="img flex-1"><img src={project4} alt="" /></div>
                  <div className="des flex-1 ">
                    <h1 className="name lg:text-[15px] md:text-[15px] text-[10px] font-bold">JEERA</h1>
                    <p className='lg:text-[12px] md:text-[12px] text-[6px] font-extralight'>Investment is life is greatest pleasure indeed. 
                    Here is a sample of our social media content for our mouthwatering client</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-footer">{props.number + 1}</div>
      </div>
    );
  });
  const Page = React.forwardRef((props, ref) => {
  
    

    return (
      <div className="page overflow-y-hidden  shadow-xl" ref={ref} data-density="hard" >
          <audio src={flipSound}  />
        <div className="page-content flex items-center gap-[20px] w-full h-full ">
          <div className='img w-[100%] h-[100%] relative'><img src={props.PageCover} alt="" className='w-full h-full object-cover '/>
            <span className=' overlay absolute w-full h-full top-0 left-0 flex items-end justify-end '>
              <div className=' grid grid-cols-4 w-full p-[20px] gap-[10px]'>
                <div className="img overflow-hidden"><img src={props.img1} alt="" className='w-full'/></div>
                <div className="img overflow-hidden"><img src={props.img2} alt="" className='w-full'/></div>
                <div className="img overflow-hidden"><img src={props.img3} alt="" className='w-full'/></div>
                <div className="img overflow-hidden"><img src={props.img4} alt=""  className='w-full'/></div>
              </div>
            </span>
          </div>
        </div>
        <div className="page-footer">{props.number + 1}</div>
      </div>
    );
  });
  
  class DemoBook extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        page: 0,
        totalPage: 0,
       play(){
        new Audio(flipSound).play()
       }
      };

    }
  
    nextButtonClick = () => {
      this.flipBook.getPageFlip().flipNext();
    };
  
    prevButtonClick = () => {
      this.flipBook.getPageFlip().flipPrev();
    };

  
    onPage = (e) => {
      this.setState({
        page: e.data,
      });
    this.state.play()
      console.log(this.state.value);
    };
 
    

  
    render() {
      return (
        <div>
          <HTMLFlipBook
            width={450}
            height={500}
            usePortrait={ipadSize<=768?true:false}
            size="stretch"
            minWidth={mobSize <=400?335:655} //315 for mob
            maxWidth={1000}
            minHeight={mobSize <=400 ? 600 :500}// 700 for mob
            maxHeight={1533}
            maxShadowOpacity={0.5}
            showCover={true}
            showPageCorners={true}
            renderOnlyPageLengthChange={true}
            mobileScrollSupport={true}
            drawShadow={false}
            onFlip={this.onPage}
            onChangeOrientation={this.onChangeOrientation}
            onChangeState={this.onChangeState}
            className="demo-book"
            ref={(el) => (this.flipBook = el)}
          >

            <PageCover>
                <div className='w-full h-full shadow-xl '>
                    <h1>BOOK TITLE</h1>
                </div>
                
            </PageCover>
            <Page1  number={1} video1={video1} video2={video2}>Lorem ipsum...</Page1>
            <Page number={2} PageCover={ostaCover} img1={osta1} img2={osta2} img3={osta3} img4={osta4}>Lorem ipsum...</Page>
            <Page number={3} PageCover={BuildersCover} img1={Builderimg1} img2={Builderimg2} img3={Builderimg3} img4={Builderimg4}>Lorem ipsum...</Page>
            <Page number={4} PageCover={serventCover} img1={serventimg1} img2={serventimg2} img3={serventimg3} img4={serventimg4}>Lorem ipsum...</Page>
            <Page number={5}>Lorem ipsum...</Page>
            <Page number={6}>Lorem ipsum...</Page>
            <PageCover>THE END</PageCover>

          </HTMLFlipBook>
  
        </div>
      );
    }
  }

  export default DemoBook