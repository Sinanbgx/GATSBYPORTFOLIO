import React, { Suspense } from 'react';
// import Spline from '@splinetool/react-spline';
import "../styles/main.scss"
// import { gsap, TextPlugin } from "gsap/all"
// import videoAnimCollection from '../videos/about me/animationCollection.mp4';
// import verticalVideo from '../videos/about me/0001-0300.mp4';
import { useEffect, useRef } from "react"

const Spline = React.lazy(() => import('@splinetool/react-spline'));


function Model() {
  useEffect(() => {

    if(document.querySelector('.da')){
      document.body.style.overflowY = "hidden";
    } /*hide the scroll bar*/

  },[])
  const cube = useRef();

  function onLoad(spline) {
    const obj = spline.findObjectByName('Camera');
    // or
    // const obj = spline.findObjectById('8E8C2DDD-18B6-4C54-861D-7ED2519DE20E');

    // save it in a ref for later use
    cube.current = obj;
    console.log(cube.current);    // cube.current.position.x += 100;
  }

  // function moveObj() {
  //   console.log(cube.current); // Spline Object => { name: 'Cube', id: '8E8C2DDD-18B6-4C54-861D-7ED2519DE20E', position: {}, ... }

  //   // move the object in 3D space
  //   cube.current.emitEvent("mouseDown");
  // }

  return (
   <div className='rootAboutMe'>
   
    <div className="splineScene">
    <Suspense fallback={<div>Loading...</div>}>
      <Spline scene="https://prod.spline.design/kT1GIENmL-NiVMLN/scene.splinecode"
        onLoad={onLoad}
      />
     </Suspense>
      {/* <button type="button" onClick={moveObj}>
        Move Cube
      </button> */}
      
    </div>
    <div className="videoContainer">
        {/* <video className='landscapeVideo' autoPlay muted loop >
        <source src={videoAnimCollection} type="video/mp4" />
           </video>
           <video className='verticalVideo' autoPlay muted loop >
        <source src={verticalVideo} type="video/mp4" />
           </video> */}
    </div>

    
   </div>
   
  )
}

export default Model
