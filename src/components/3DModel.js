import React from 'react'
import cvVID from '../videos/about me/CVcompressed.mp4'
import videoUX from '../videos/about me/uxbulgariaAnimation.mp4'
import videoAnimCollection from '../videos/about me/3DAdWebsite.mp4'
import { useEffect, useRef,useState, useReducer } from "react"
import { gsap } from "gsap/all"
import Spline from '@splinetool/react-spline'
import { useMatchMedia } from "./useMatchMedia";


const initialState = {count: 1};
const initialStateRec = {count: 1};






function Model() {

  function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      if (state.count === 3){
        return {count: state.count = 1};
      } else{
        return {count: state.count + 1};
      }     
    case 'decrement':
      if (state.count === 1){
        return {count: state.count = 3};
      } else{
        return {count: state.count - 1};
      }   
    default:
      throw new Error();
  }
}
function reducer2(state2, action2) {
  switch (action2.type) {
    case 'increment':
      if (state2.count === 3){
        return {count: state2.count = 1};
      } else{
        return {count: state2.count + 1};
      }     
    case 'decrement':
      if (state2.count === 1){
        return {count: state2.count = 3};
      } else{
        return {count: state2.count - 1};
      }   
    default:
      throw new Error();
  }
}

  const [state, dispatch] = useReducer(reducer, initialState);
  const [state2, dispatch2] = useReducer(reducer2, initialStateRec);
  const windowSizeRef = useRef();
  windowSizeRef.current = useMatchMedia('(max-width: 750px)')
  

  const camera = useRef();
  const cameraMobile = useRef();
  const socialsMobile = useRef(null)
  const loadingScreenRef = useRef(null)
  const innerCounterRef = useRef(null)
  const videoContainerRef = useRef(null)
  const mainContainerRef = useRef(null)
  const recContainerRef = useRef(null)
  const firstRec = useRef(null)
  const nextRecButton = useRef(null)
  const closeRecButton = useRef(null)
  const videos = useRef(null)
  useEffect(() => {
   videos.current = gsap.utils.toArray('video');    
  },[])
  



  let desktop = 1920// 2500
  let laptop  =  1440 // 3000
  let laptopS =  1024 // 3349.19912568484
  let  tablet = 950 //3884.19912568484
  let cameraZoomDesktop = 3600
  let cameraZoomLaptop = 3708.14
  let cameraZoomLaptopS = 4208.14
  let cameraZoomTablet = 4508.14
  let cameraZoomPhoneLarge = 700
  let cameraZoomPhoneMedium = 800
  let cameraZoomPhoneSmall = 900
  let cameraZoomPhoneXS = 950
  let cameraZoomPhoneXXS = 1050


  
  
  const [height, setHeight] = useState();

  function profile1() {
    window.open('https://www.linkedin.com/in/dinacravcenco-marketing-management/')
  }
  function profile2() {
    window.open('https://www.instagram.com/taliaferro888/')
  }
  function profile3() {
    window.open('https://www.facebook.com/nilsbourdon')
  }
  

  useEffect(() => {

    if(document.querySelector('.da')){
      document.body.style.overflowY = "hidden";
    } /*hide the scroll bar*/
    if(window.innerWidth >= 750 ){
    const innerCounter = innerCounterRef.current
    gsap.to(innerCounter, {innerText: 100, snap: {
        innerText:1
      },  duration: 2, delay:0.2});
    }

  },[])
  function muteNext(){
    if (videos.current[0].muted === true && videos.current[1].muted === true && videos.current[2].muted === true){
    }else{
    if(videos.current[1].classList.contains('aboutMeContainer__landscapeVideo--disabled') && videos.current[2].classList.contains('aboutMeContainer__landscapeVideo--disabled')){
          videos.current[0].muted = true;
          videos.current[1].muted = false
          videos.current[1].play()
          videos.current[2].muted = true
        } else if (videos.current[0].classList.contains('aboutMeContainer__landscapeVideo--disabled') && videos.current[2].classList.contains('aboutMeContainer__landscapeVideo--disabled')){
          videos.current[1].muted = true;
          videos.current[0].muted = true
          videos.current[2].muted = false
          videos.current[2].play()
        } else{
          videos.current[2].muted = true;
          videos.current[1].muted = true
          videos.current[0].muted = false
        }
  }
}
function mutePrev(){
  if (videos.current[0].muted === true && videos.current[1].muted === true && videos.current[2].muted === true){
  }else{
  if(videos.current[1].classList.contains('aboutMeContainer__landscapeVideo--disabled') && videos.current[2].classList.contains('aboutMeContainer__landscapeVideo--disabled')){
        videos.current[0].muted = true;
        videos.current[2].muted = false
        videos.current[2].play()
        videos.current[1].muted = true
      } else if (videos.current[0].classList.contains('aboutMeContainer__landscapeVideo--disabled') && videos.current[1].classList.contains('aboutMeContainer__landscapeVideo--disabled')){
        videos.current[2].muted = true;
        videos.current[0].muted = true
        videos.current[1].muted = false
        videos.current[1].play()
      } else{
        videos.current[2].muted = true;
        videos.current[1].muted = true
        videos.current[0].muted = false
      }
}
}
 
/*mobile scene*/

  function OnLoadMobile(spline) {
    const camera3d = spline.findObjectByName('Camera')
    const socialsBox = spline.findObjectByName('Socials')
    cameraMobile.current = camera3d; 
    socialsMobile.current = socialsBox; 
    setCameraPositionMobile();

    const loadingScreen = loadingScreenRef.current
    gsap.to(loadingScreen, {opacity:0, duration: 1, ease: "power1.out"});
    gsap.to(loadingScreen, {"display":"none", delay:1});
  }


  function OnMouseDownMobile(e) {
    switch (e.target.name) {
      case 'button':
        dispatch({type: 'increment'})
        muteNext();
        break;
        case 'head':
        gsap.to(videoContainerRef.current, {"display":"flex"});
        videoContainerRef.current.play()
        break;
        case 'emailButton':
          window.location.href = 'mailto:sinanbgx@gmail.com?subject=What should we discuss?&body=Elaborate here...';
                  break;

        case 'recButton':
                    gsap.to(recContainerRef.current, {'display':'flex'});
                    gsap.to(recContainerRef.current, {opacity:1, duration: 0.2, delay:0.1, ease: "power1.out"});
                    gsap.to('.aboutMeContainer__recommendation', {opacity:1, y:0, duration: 0.5, delay:0.2, ease: "power1.out"});
                    gsap.to(nextRecButton.current, {opacity:1, y:0, duration: 0.1, ease: "power1.out"});
                    gsap.to(closeRecButton.current, { y:0, duration: 0.1, ease: "power1.out"});                            break;
                    case 'muteAudioMobile':
                      if(videos.current[0].classList.contains('aboutMeContainer__landscapeVideo--disabled') !== true){
                        videos.current[1].muted = true
                        videos.current[2].muted = true
                      if(videos.current[0].muted === true){
                        videos.current[0].muted = false;
                      }else{
                        videos.current[0].muted = true;
                      }
                      } else if (videos.current[1].classList.contains('aboutMeContainer__landscapeVideo--disabled') !== true){
                        videos.current[0].muted = true
                        videos.current[2].muted = true
                          if(videos.current[1].muted === true){
                            videos.current[1].muted = false;
                          }else{
                            videos.current[1].muted = true;
                          }
                      }else{
                        videos.current[1].muted = true
                        videos.current[0].muted = true
                          if(videos.current[2].muted === true){
                            videos.current[2].muted = false;
                          }else{
                            videos.current[2].muted = true;
                          }
                      }
                    break;
      default:
        break;
    }
  }

  function setCameraPositionMobile() {
    if(windowSizeRef.current === true){
    if(window.innerWidth<= 750 && window.innerWidth>= 540 ){
      cameraMobile.current.position.z = cameraZoomPhoneLarge
      socialsMobile.current.position.z= 160;
      socialsMobile.current.position.y= -145;
  } else if(window.innerWidth<= 540 && window.innerWidth>= 440 ){
    socialsMobile.current.position.z= 180;
    cameraMobile.current.position.z = cameraZoomPhoneMedium
}else if(window.innerWidth<= 440 && window.innerWidth>= 390){
  cameraMobile.current.position.z = cameraZoomPhoneSmall
  socialsMobile.current.position.z= 250;
}
else if(window.innerWidth<= 390 && window.innerWidth >= 350){
  cameraMobile.current.position.z = cameraZoomPhoneXS
  socialsMobile.current.position.z= 200;
  socialsMobile.current.position.y= -165;
}else if(window.innerWidth <= 350){
  cameraMobile.current.position.z = cameraZoomPhoneXXS
  }  

  }
}
  /*mobile scene*/
  function nextRec() {
    dispatch2({type: 'increment'})
  }
  /*desktop scene*/
  function OnLoad(spline) {
    const camera3d = spline.findObjectByName('Camera')
    camera.current = camera3d; 
    setCameraPosition();
    const loadingScreen = loadingScreenRef.current
    gsap.to(loadingScreen, {opacity:0, duration: 0.5, delay:2, ease: "power1.out"});
    gsap.to(loadingScreen, {"display":"none", delay:2.5});
    setTimeout(() => {
      videoContainerRef.current.play()
    }, "2350")
    
  }
  useEffect(() => {
    mainContainerRef.current.style.height = window.innerHeight
   
    },[])


  function onMouseDown(e) {

    switch (e.target.name) {
      case 'next':
        dispatch({type: 'increment'})
        muteNext();
        break;
        case 'previous':
          dispatch({type: 'decrement'})
          mutePrev()
        break;
        case 'EMAIL':
          window.location.href = 'mailto:sinanbgx@gmail.com?subject=What should we discuss?&body=Elaborate here...';
                  break;
                  case 'RECBUTTON':
                    gsap.to(recContainerRef.current, {'display':'flex'});
                    gsap.to(recContainerRef.current, {opacity:1, duration: 0.2, delay:0.1, ease: "power1.out"});
                    gsap.to('.aboutMeContainer__recommendation', {opacity:1, y:0, duration: 0.5, delay:0.2, ease: "power1.out"});
                    gsap.to(nextRecButton.current, {opacity:1, y:0, duration: 0.1, ease: "power1.out"});
                    gsap.to(closeRecButton.current, { y:0, duration: 0.1, ease: "power1.out"});
                    break;
                    case 'muteAudio':
                      if(videos.current[0].classList.contains('aboutMeContainer__landscapeVideo--disabled') !== true){
                        videos.current[1].muted = true
                        videos.current[2].muted = true
                      if(videos.current[0].muted === true){
                        videos.current[0].muted = false;
                      }else{
                        videos.current[0].muted = true;
                      }
                      } else if (videos.current[1].classList.contains('aboutMeContainer__landscapeVideo--disabled') !== true){
                        videos.current[0].muted = true
                        videos.current[2].muted = true
                          if(videos.current[1].muted === true){
                            videos.current[1].muted = false;
                          }else{
                            videos.current[1].muted = true;
                          }
                      }else{
                        videos.current[1].muted = true
                        videos.current[0].muted = true
                          if(videos.current[2].muted === true){
                            videos.current[2].muted = false;
                          }else{
                            videos.current[2].muted = true;
                          }
                      }
                    break;
      default:
        break;
    }
  }
 
 

  function setCameraPosition() {
    if(windowSizeRef.current === false){
    if(window.innerWidth>=desktop){
     camera.current.position.z = cameraZoomDesktop
    }else if(window.innerWidth >= laptop && window.innerWidth < desktop ){
     camera.current.position.z = cameraZoomLaptop
    }else if(window.innerWidth >= laptopS && window.innerWidth < laptop ){
     camera.current.position.z = cameraZoomLaptopS
    }
    else if(window.innerWidth >= tablet && window.innerWidth < laptopS ){
     camera.current.position.z = cameraZoomTablet
    } else if(window.innerWidth < tablet){
     camera.current.position.z = 5300
    }
  }
   }
   function closePopUP(){
    gsap.to(recContainerRef.current, {opacity:0, duration: 0.2, delay:0.7, ease: "power1.out"});
    gsap.to('.aboutMeContainer__recommendation', {opacity:0, y:100, duration: 0.5, delay:0.2, ease: "power1.out"});
    gsap.to(nextRecButton.current, {opacity:0, y:50, duration: 0.1, ease: "power1.out"});
    gsap.to(closeRecButton.current, { y:100, duration: 0.1, ease: "power1.out"});
    gsap.to(recContainerRef.current, {'display':'none',delay:1,});
   }
 
 
  // function setCameraPositionResponsive() {
  //   if(windowSizeRef.current === false){
  //   if(window.innerWidth>=desktop){
  //    camera.current.position.z = cameraZoomDesktop
  //   }else if(window.innerWidth >= laptop && window.innerWidth < desktop ){
  //    camera.current.position.z = cameraZoomLaptop
  //   }else if(window.innerWidth >= laptopS && window.innerWidth < laptop ){
  //    camera.current.position.z = cameraZoomLaptopS
  //   }
  //   else if(window.innerWidth >= tablet && window.innerWidth < laptopS ){
  //    camera.current.position.z = cameraZoomTablet
  //   }else if(window.innerWidth < tablet){
  //     camera.current.position.z = 5300
  //    }
  //   }
  //  }
 /*desktop scene*/
 useEffect(() => {
 mainContainerRef.current.style.height = window.innerHeight

 },[])
   useEffect(() => {
    setHeight(window.innerHeight)
    window.onresize = function(event) {
      // setCameraPositionMobile() 
      setHeight(window.innerHeight)
    };
    // window.onresize = setCameraPositionResponsive;
  },[])

  return (
   <div ref={mainContainerRef} className="aboutMeContainer" style={{
    height: `${height}px`
  }}>
    <div ref={loadingScreenRef} className="aboutMeContainer__loadingScreen ">
      <div className="aboutMeContainer__loadingText aboutMeContainer__counter--disableMobile"><p>LOADING</p></div>
      <div className="aboutMeContainer__loadingText aboutMeContainer__loadingText--flipped aboutMeContainer__counter--disableMobile"><p>LOADING</p></div>
      <div className="aboutMeContainer__loadingText aboutMeContainer__loadingText--center"><p>LOADING</p></div>
            <div  className="aboutMeContainer__counter aboutMeContainer__counter--disableMobile"><p ref={innerCounterRef} >0</p></div>
            </div>
            {windowSizeRef.current === false && <div className="aboutMeContainer__splineScene aboutMeContainer__splineScene--disableMobile">
     <Spline scene="https://prod.spline.design/yDMJWeVMzeGgQMzz/scene.splinecode"
        onLoad={OnLoad} 
        onMouseDown={onMouseDown}/>
    </div>}
    {windowSizeRef.current && <div className="aboutMeContainer__splineScene aboutMeContainer__splineScene--enableMobile">
    <Spline scene="https://prod.spline.design/6ZhK5EdQ19dXPS-k/scene.splinecode"
        onLoad={OnLoadMobile} 
        onMouseDown={OnMouseDownMobile}/>
    </div>}
    <div className="aboutMeContainer__videoContainer">
        <video ref={videoContainerRef}  className={state.count !== 1 ? "aboutMeContainer__landscapeVideo--disabled " : "aboutMeContainer__landscapeVideo"} loop>
        <source src={cvVID} type="video/mp4" />
           </video>
       <video className={state.count !== 2 ? "aboutMeContainer__landscapeVideo--disabled " : "aboutMeContainer__landscapeVideo"} autoPlay muted loop>
        <source src={videoUX} type="video/mp4" />
        </video>
        <video className={state.count !== 3 ? "aboutMeContainer__landscapeVideo--disabled " : "aboutMeContainer__landscapeVideo"} autoPlay muted loop>
        <source src={videoAnimCollection} type="video/mp4" />
         </video>
           
           
           </div>
       <div ref={recContainerRef} className="aboutMeContainer__recommendations">
        <div onMouseDown={closePopUP} className="aboutMeContainer__clickOff"> </div>  
    <div  ref={firstRec} className={state2.count !== 1 ? "aboutMeContainer__hideRec" : "aboutMeContainer__recommendation"}>
    <div className="aboutMeContainer__recommendation-information ">
    <div className="aboutMeContainer__recommendation-writtenBy ">
    <div className="aboutMeContainer__recommendation-profileImage aboutMeContainer__recommendation-profileImage--firstRec"></div>
      <div className="aboutMeContainer__nameTitle">
        <p>Dina Cravcenco</p>
        <p>Head of Marketing</p>
      </div>
    </div>
    <div className="aboutMeContainer__text">
      <p>From his first day, Sinan positioned himself as a great team-player, respecting deadlines, supporting our team with qualitative research, profitable/ innovative ideas and offering professional guidance when implementing change.</p>

    </div>
      </div>
      <div className="aboutMeContainer__link">
        <button onClick={profile1}>See Profile</button>
      </div>
      </div>
      <div className={state2.count !== 2 ? "aboutMeContainer__hideRec" : "aboutMeContainer__recommendation"}>
    <div className="aboutMeContainer__recommendation-information ">
    <div className="aboutMeContainer__recommendation-writtenBy ">
    <div className="aboutMeContainer__recommendation-profileImage aboutMeContainer__recommendation-profileImage--secondRec"></div>
      <div className="aboutMeContainer__nameTitle">
        <p>TaliaFerro</p>
        <p>Rapper</p>
      </div>
    </div>
    <div className="aboutMeContainer__text">
      <p>Sinan is an extremely professional person to work with. He completes work to a very high quality in a timely manner. He also maintains great communication with customers, making sure you are always kept up to date with the project’s status. Highly recommend!</p>

    </div>
      </div>
      <div className="aboutMeContainer__link">
        <button onClick={profile2}>See Profile</button>
      </div>
      </div>
      <div className={state2.count !== 3 ? "aboutMeContainer__hideRec" : "aboutMeContainer__recommendation"}>
    <div className="aboutMeContainer__recommendation-information ">
    <div className="aboutMeContainer__recommendation-writtenBy ">
    <div className="aboutMeContainer__recommendation-profileImage aboutMeContainer__recommendation-profileImage--thirdRec"></div>
      <div className="aboutMeContainer__nameTitle">
        <p>Nils Bourdon</p>
        <p>Musician</p>
      </div>
    </div>
    <div className="aboutMeContainer__text">
      <p>Sinan will be there to get you a place to start or continue building your image and improve the tools you use on the internet. The prices are out of the competition on the market and he’s very adaptable.  </p>

    </div>
      </div>
      <div className="aboutMeContainer__link">
        <button onClick={profile3}>See Profile</button>
      </div>
      </div>
      <div className="aboutMeContainer__nextRec">
        <button ref={nextRecButton} onMouseDown={nextRec}>NEXT</button>
      </div>
     
      <div className="aboutMeContainer__closePopUp">
        <button ref={closeRecButton} onMouseDown={closePopUP}>CLOSE</button>
      </div>
    </div>

    

    
   </div>
   
  )
}

export default Model
