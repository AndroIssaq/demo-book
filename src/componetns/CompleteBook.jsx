/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState,useEffect } from 'react';
/* eslint-disable react/display-name */
import HTMLFlipBook from 'react-pageflip';
import PageCover from './CoverPage';

import {PageFlip} from 'page-flip';


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
import EndPageCover from './EndPageCover';
import Page1 from './Page1';
const ipadSize=window.innerWidth
const mobSize=window.innerWidth



  
  
  

  const Page = React.forwardRef((props, ref) => {
    return (
      <div className="page overflow-y-hidden  shadow-xl" ref={ref} data-density="hard" >
          <audio src={flipSound}  />
        <div className="page-content flex items-center gap-[20px] w-full h-full ">
          <div className='img w-[100%] h-[100%] relative'><img src={props.PageCover} alt="" className='w-full h-full object-cover '/>
            <span className=' overlay absolute w-full h-full top-0 left-0 flex items-end justify-end '>
              <div className=' grid grid-cols-4 w-full p-[5px] gap-[10px]'>
                <div className="img overflow-hidden"><img src={props.img1} alt="" className='w-full'/></div>
                <div className="img overflow-hidden"><img src={props.img2} alt="" className='w-full'/></div>
                <div className="img overflow-hidden"><img src={props.img3} alt="" className='w-full'/></div>
                <div className="img overflow-hidden"><img src={props.img4} alt=""  className='w-full'/></div>
              </div>
            </span>
          </div>
        </div>
        <div className="page-footer absolute ">{props.number + 1}</div>
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
            minWidth={mobSize <=400?355:555} //315 for mob
            maxWidth={1000}
            minHeight={mobSize <=400 ? 630 :750}// 700 for mob
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
            <Page1  number={1}>Lorem ipsum...</Page1>
            <Page number={2} PageCover={ostaCover} img1={osta1} img2={osta2} img3={osta3} img4={osta4}>Lorem ipsum...</Page>
            <Page number={3} PageCover={BuildersCover} img1={Builderimg1} img2={Builderimg2} img3={Builderimg3} img4={Builderimg4}>Lorem ipsum...</Page>
            <Page number={4} PageCover={serventCover} img1={serventimg1} img2={serventimg2} img3={serventimg3} img4={serventimg4}>Lorem ipsum...</Page>
            <Page number={5}>Lorem ipsum...</Page>
            <Page number={6}>Lorem ipsum...</Page>
            <EndPageCover>THE END</EndPageCover>

          </HTMLFlipBook>
  
        </div>
      );
    }
  }

  export default DemoBook