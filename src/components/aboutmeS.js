import React from 'react';
import { gsap, TextPlugin } from "gsap/all"
import { useEffect, useState  } from "react"
import videoBackground from '../videos/about me/final.mp4';
import videoAnimCollection from '../videos/about me/animationCollection.mp4';
import videoUxBulgaria from '../videos/about me/uxbulgariaAnimation.mp4';
import photoSM from '../images/about me/test.jpg';



function ABOUTMES() {

  //USE STATE FOR RADIO BUTTONS
  const [section,sectionChange]=useState({ value: 'firstSection' });

  const handleChange=(e)=>{
    sectionChange( e.target.value); }

          useEffect(() => {


//CURSOR INTERACTION    
if (window.innerWidth > 850)  {      
const bigCircle = document.querySelector('.cursor__ball--big');
const smallCircle = document.querySelector('.cursor__ball--small');
const hoverables = document.querySelectorAll('.hoverable');
const hoverableRB = document.querySelectorAll('.hoverableRB');

document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < hoverables.length; i++) {
  hoverables[i].addEventListener('mouseenter', onMouseHover);
  hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

for (let i = 0; i < hoverableRB.length; i++) {
  hoverableRB[i].addEventListener('mouseenter', onMouseHoverRB);
  hoverableRB[i].addEventListener('mouseleave', onMouseHoverOutRB);
}

// Move the cursor
function onMouseMove(e) {
  gsap.to(bigCircle, {
    x: e.pageX - 15,
    y: e.pageY - 15,
    duration:.4
  })
  gsap.to(smallCircle, {
    x: e.pageX - 5,
    y: e.pageY - 7,
    duration:.1
  })
}

// Hover an element
function onMouseHover() {
  gsap.to(bigCircle, {
    scale: 4,
    duration:.3,
  })
  gsap.to(smallCircle, {
    scale: 0,
    duration:.3,
  })
}
function onMouseHoverOut() {
  gsap.to(bigCircle, {
    scale: 1,
    duration:.3,
    ease: "bounce.out"
  })
  gsap.to(smallCircle, {
    scale: 1,
    duration:.3,
  })
}
// Hover a radio button
function onMouseHoverRB() {
  gsap.to(bigCircle, {
    scale: 0,
    duration:.3,
  })
  gsap.to(smallCircle, {
    scale: 0,
    duration:.3
  })
}
function onMouseHoverOutRB() {
  gsap.to(bigCircle, {
    scale: 1,
    duration:.3,
    ease: "bounce.out"
  })
  gsap.to(smallCircle, {
    scale: 1,
    duration:.3,
  })
}
}

        //ANIMATION ON LOAD
        let entryAnim = gsap.timeline({});
        entryAnim.fromTo(".aboutMeMain--entryAnimationContainer", {opacity: 0}, {opacity: 1,delay:3, duration:0.2});
        entryAnim.fromTo(".aboutMeMain--entryAnimationImage", {opacity: 0, y:100, display:'none'}, {opacity: 1, y:0, display:'flex', duration:0.4},'<');
        entryAnim.fromTo(".aboutMeMain--entryAnimationImage", {boxShadow:"1px -1px 36px 0px rgba(255,255,255,0)",}, {boxShadow:"1px 0px 20px 0px rgba(255,255,255,0.50)", duration:1},'<');
        entryAnim.fromTo(".aboutMeMain__radioButtons", {opacity: 0, x:-100}, {opacity: 1, x:0,delay:0.5, duration:0.2},'<');
        entryAnim.fromTo(".aboutMeMain--entryAnimationTxtContainer", {opacity: 0, y:-100, display:'none'}, {opacity: 1, y:0, duration:0.6,display:'flex', delay:0.2},'<');
        

  }, []) 

  //USE EFFECET FOR RADIO BUTTONS
  useEffect(() => {
    gsap.registerPlugin( TextPlugin)
    
    const sentences = ["Hey, I'm Sinan! I'm a UX/UI designer and front-end dev. based in Aalborg DK. ",
    `I began learning the basics of programming in High school, which evolved into developing websites,
      researching and designing user interfaces, and creating digital art.`,
     "That path also led me to create a SoMe page called UXBulgaria where I can share and solidify what I have learned so far to people that want to learn about UX/UI design.",
      "A Developer."]

    //FIRST SECTION ANIMATION 


    let animationFS = gsap.timeline({paused:true});
    animationFS.fromTo(".aboutMeMain__storyText",{text:sentences[1]}, {text:sentences[0], duration:0.1 });
    animationFS.fromTo(".aboutMeMain__image", { y:100, display:'none'}, { y:0, display:'flex', duration:0.2});
    animationFS.fromTo(".aboutMeMain__image", {boxShadow:"1px -1px 36px 0px rgba(255,255,255,0)",}, {boxShadow:"1px 0px 20px 0px rgba(255,255,255,0.50)", duration:0.5});
    animationFS.fromTo(".aboutMeMain__storyTextContainer", {opacity: 0, y:-100, display:'none'}, {opacity: 1, y:0,display:'flex', duration:0.4},'<');

    let animationFS2 = gsap.timeline({paused:true});
    animationFS2.fromTo(".aboutMeMain__animationsCollection",{ y:100, display:'none'}, { y:0, duration:0.2, display:'flex' });
    animationFS2.fromTo(".aboutMeMain__animationsCollection", {boxShadow:"1px -1px 36px 0px rgba(255,255,255,0)",}, {boxShadow:"1px 0px 20px 0px rgba(255,255,255,0.50)", duration:0.5});
    animationFS2.fromTo(".aboutMeMain__storyText",{text:sentences[0]}, {text:sentences[1], duration:0.1 },'<');
    animationFS2.fromTo(".aboutMeMain__storyTextContainer",{opacity: 0, y:-100, display:'none'}, {opacity:1, y:0,display:'flex', duration:0.4 },'<');

    let animationFS3 = gsap.timeline({paused:true});
    animationFS3.fromTo(".aboutMeMain__animationUxBulgaria",{ y:100, display:'none'}, { y:0, duration:0.2, display:'flex' });
    animationFS3.fromTo(".aboutMeMain__animationUxBulgaria", {boxShadow:"1px -1px 36px 0px rgba(255,255,255,0)",}, {boxShadow:"1px 0px 20px 0px rgba(255,255,255,0.50)", duration:0.5});
    animationFS3.fromTo(".aboutMeMain__storyText",{text:sentences[0]}, {text:sentences[2], duration:0.1 },'<');
    animationFS3.fromTo(".aboutMeMain__storyTextContainer",{opacity: 0, y:-100, display:'none'}, {opacity:1, y:0,display:'flex', duration:0.4 },'<');

    let animationFS4 = gsap.timeline({paused:true});
    animationFS4.set(".aboutMeMain__storyTextContainer", {display:'none',delay:0});
    animationFS4.fromTo(".contactContainer__contactSection",{ y:100, display:'none'}, { y:0, duration:0.2, display:'flex' });

    const radioButtons = document.getElementsByClassName('radioButtons');

    switch (section) {
      case 'firstSection':
        animationFS.play();
        //for each radio button
        for (let i = 0; i < radioButtons.length; i++) {
          //disable radio buttons
          radioButtons[i].setAttribute('disabled', 'true');

          // run a function after 1.1 seconds
          setTimeout(() => {
            //enable radio buttons
            radioButtons[i].removeAttribute('disabled');
          }, 1100);
          
        }
        break;
      case 'secondSection':
        animationFS2.play();
         //for each radio button
         for (let i = 0; i < radioButtons.length; i++) {
          //disable radio buttons
          radioButtons[i].setAttribute('disabled', 'true');

          // run a function after 1.1 seconds
          setTimeout(() => {
            //enable radio buttons
            radioButtons[i].removeAttribute('disabled');
          }, 1100);
          
        }
        break;
      case 'thirdSection':
        animationFS3.play();
         //for each radio button
         for (let i = 0; i < radioButtons.length; i++) {
          //disable radio buttons
          radioButtons[i].setAttribute('disabled', 'true');

          // run a function after 1.1 seconds
          setTimeout(() => {
            //enable radio buttons
            radioButtons[i].removeAttribute('disabled');
          }, 1100);
          
        }
        break;
      case 'fourthSection':
        animationFS4.play();
         //for each radio button
         for (let i = 0; i < radioButtons.length; i++) {
          //disable radio buttons
          radioButtons[i].setAttribute('disabled', 'true');

          // run a function after 1.1 seconds
          setTimeout(() => {
            //enable radio buttons
            radioButtons[i].removeAttribute('disabled');
          }, 1100);
          
        }
        break;
      default:
        console.log(`No errors to see here mate :)`);
    }

    // if ( section === 'firstSection'){
    //   console.log('DO SOMETHING')
    //   gsap.to('.aboutMeMain__image', {y:-200, delay:5})
      
    // }
  }, [section]) 

  return (
   <div className="aboutMeMain ">

   <div className="notReadyYetMate">
   <h1>IDK there wandering explorer, the website will be adapted for smaller devices soon.</h1>
   <h2>Thank you for being patient! </h2>
   </div>

   <div className="cursor">
  <div className="cursor__ball cursor__ball--big ">
    <svg height="30" width="30">
      <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
    </svg>
  </div>
  
  <div className="cursor__ball cursor__ball--small">
    <svg height="10" width="10">
      <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
    </svg>
  </div>
</div>

      <div className="aboutMeMain__animationContainer ">
      <div className="aboutMeMain__storyContainer aboutMeMain--entryAnimationContainer">
           <img src={photoSM} className="aboutMeMain__image aboutMeMain--entryAnimationImage " alt="Sinan Mehmed" height="100%" width="100%" />
           <video   autoPlay muted loop className="aboutMeMain__animationsCollection">
        <source src={videoAnimCollection} type="video/mp4" />
           </video>
           <video   autoPlay muted loop className="aboutMeMain__animationUxBulgaria ">
        <source src={videoUxBulgaria} type="video/mp4" />
           </video>
            <div className="aboutMeMain__storyTextContainer aboutMeMain--entryAnimationTxtContainer">
            <p className="aboutMeMain__storyText">
            Hey, I'm Sinan! I'm a UX/UI designer and front-end dev. based in Aalborg DK</p>
            </div>

            <div className="contactContainer__contactSection">
          <div className="contactContainer__contactPersonalMail">
            <div className="contactContainer__contactCTA">
              <h2>Feel free to contact me for any project or collaboration.</h2>
            </div>
            <div className="contactContainer__contactMailto hoverable">
              <a href="mailto:sinanbgx@gmail.com?subject=How can I help you?&body=Please, provide more details here..."
              target="_blank" rel="noopener noreferrer">
                Use a preffered email service
              </a>
            </div>
          </div>
          <div>
            <form
              className="contactContainer__contactForm"
              action="https://formspree.io/xeqebbrr"
              method="POST"
            >
              <div className="contactContainer__contactFormColumnLeft">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Mikael Smith"
                  required
                />

                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  name="_replyto"
                  placeholder="example@domain.com"
                  required
                />
                <input type="text" name="_gotcha" style={{ display: "none" }} />
              </div>

              <div className="contactContainer__contactFormColumnRight">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  placeholder="What can I help you with?"
                  required
                ></textarea>

                <button className="hoverable" type="submit">SEND MESSAGE</button>
              </div>
            </form>
          </div>
        </div>

            <div className="aboutMeMain__radioButtons">
            <input className="radioButtons hoverableRB" type="radio" value="firstSection" onChange={handleChange} name="section" defaultChecked/>
            <input className="radioButtons hoverableRB" type="radio" value="secondSection" onChange={handleChange} name="section"/>
            <input className="radioButtons hoverableRB" type="radio" value="thirdSection"  onChange={handleChange} name="section"/>
            <input className="radioButtons hoverableRB" type="radio" value="fourthSection" onChange={handleChange}  name="section"/>
            </div>
          </div>

         
      <video autoPlay muted className="aboutMeMain__videoBackground">
        <source src={videoBackground} type="video/mp4" />
    </video>
      </div>
   </div>
  )
}

export default ABOUTMES
