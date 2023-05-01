/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
/* eslint-disable react/display-name */
import HTMLFlipBook from 'react-pageflip';
import logo from '../assets/logo.png'
import {PageFlip} from 'page-flip';
import video1 from '../assets/Sequence 01 (1).mp4' 
import Servent from '../assets/334969121_582146777177395_358755000486760050_n.png'
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
  
  
  const Page = React.forwardRef((props, ref) => {
    return (
      <div className="page relative shadow-xl" ref={ref} data-density="hard" >
        <div className="page-content flex items-center gap-[20px] ">
          <div className="left flex-1  flex flex-col items-center justify-center h-full">
            <div className="video1">
            <video autoPlay muted loop className=''>
            <source src={props.video1}  />
            </video>
            </div>
            <div className="video2"></div>
            <div className="logo"></div>
            <h1></h1>
            <p></p>
            <p></p>
            <p></p>
          </div>

          <div className="right flex-1">
            <div className='header flex flex-col items-start justify-start '>
              <h1 className='title text-[12px] font-bold'>Gets Agency / Fetured Projects</h1>
              <h1 className='content text-[25px] font-semibold '>Content</h1>
              <p className='text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="projects  flex flex-col items-start justify-start mt-[20px] h-full gap-[10px]">
              <div className="project flex items-center gap-[10px]">
                  <div className="img flex-1"><img src={Servent} alt="" /></div>
                  <div className="des flex-1 ">
                    <h1 className="name lg:text-[15px] md:text-[15px] text-[10px] font-bold">SERVENET</h1>
                    <p className='lg:text-[12px] md:text-[12px] text-[6px] font-extralight'>🔥 Our Latest 🔥 Branding for Servnet We are so glad to be part of this success story</p>
                  </div>
              </div>
          
              <div className="project flex items-center gap-[10px]">
                  <div className="img flex-1"><img src={Servent} alt="" /></div>
                  <div className="des flex-1 h-[70%] overflow-hidden ">
                    <h1 className="name lg:text-[15px] md:text-[15px] text-[10px] font-bold">SERVENET</h1>
                    <p className='lg:text-[12px]  overflow-hidden md:text-[12px] text-[6px] font-extralight'>🔥 Our Outdoor Campaign for o-court mall
developed by Motawroon developmentThe slogan for the campaign:-FOOD COURTW </p>
                  </div>
              </div>

              <div className="project flex items-center gap-[10px]">
                  <div className="img flex-1"><img src={Servent} alt="" /></div>
                  <div className="des flex-1 ">
                    <h1 className="name lg:text-[15px] md:text-[15px] text-[10px] font-bold">SERVENET</h1>
                    <p className='lg:text-[12px] md:text-[12px] text-[6px] font-extralight'>🔥 Our Latest 🔥 Branding for Servnet We are so glad to be part of this success story</p>
                  </div>
              </div>

          
            </div>
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
    };

  
    render() {
      return (
        <div>
          <HTMLFlipBook
            width={450}
            height={500}
            usePortrait={ipadSize<=768?true:false}
            size="stretch"
            minWidth={mobSize <=400?375:655} //315 for mob
            maxWidth={1000}
            minHeight={mobSize <=400 ? 700 :500}// 700 for mob
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
            <Page  number={1} video1={video1}>Lorem ipsum...</Page>
            <Page number={2}>Lorem ipsum...</Page>
            <Page number={2}>Lorem ipsum...</Page>
            <Page number={2}>Lorem ipsum...</Page>
            <Page number={2}>Lorem ipsum...</Page>
            <Page number={2}>Lorem ipsum...</Page>
            <PageCover>THE END</PageCover>

          </HTMLFlipBook>
  
        </div>
      );
    }
  }

  export default DemoBook