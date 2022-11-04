import React, {useRef, useEffect, Suspense} from "react"
import { useMatchMedia } from "./useMatchMedia";
import { gsap, ScrollTrigger  } from "gsap/all"
import JSONData from "../../src/content/data.json"
import { Link } from "gatsby"

const Spline = React.lazy(() => import('@splinetool/react-spline'));




function MProjects() {
  gsap.registerPlugin(ScrollTrigger)

  function projectLink() {
    //local
    window.open(JSONData.NilsB.link)
  }
  function projectLink2() {
    window.open(JSONData.WSCBAU.link)
  }
  function projectLink3() {
    //local
    window.open(JSONData.UCNAmbassadors.link)
  }
  function projectLink4() {
    //local
    window.open(JSONData.UXBulgaria.link)
  }
  function projectLink5() {
    window.open(JSONData.Trailer3d.link)
  }
  function projectLink6() {
    window.open(JSONData.TuborgAnimation.link)
  }


    
  const windowSizeRef = useRef();
  windowSizeRef.current = useMatchMedia('(max-width: 768px)')
  const windowSizeRef2 = useRef();
  windowSizeRef2.current = useMatchMedia('(max-width: 415px)')
  const camera = useRef();  



  useEffect(() => {
    if(window.innerWidth <=768){
      let sections = gsap.utils.toArray('.mobileHomepage__projects');
  let images = gsap.utils.toArray('.mobileHomepage__projectImage');


    images.forEach((image) => {
      switch (image) {
        case images[0]:
          gsap.to(images[0], {
            scrollTrigger: {
                trigger: images[0],
                start: 'top bottom+=120',
                toggleClass:"mobileHomepage__projectImage--firstProject",
                once: true,
            }
        });
          break;
          case images[1]:
            gsap.to(images[1], {
              scrollTrigger: {
                  trigger: images[1],
                  start: 'top bottom+=120',
                  toggleClass:"mobileHomepage__projectImage--secondProject",
                  once: true,
              }
          });
            break;

            case images[2]:
            gsap.to(images[2], {
              scrollTrigger: {
                  trigger: images[2],
                  start: 'top bottom+=120',
                  toggleClass:"mobileHomepage__projectImage--thirdProject",
                  once: true,
              }
          });
          break;
          case images[3]:
            gsap.to(images[3], {
              scrollTrigger: {
                  trigger: images[3],
                  start: 'top bottom+=120',
                  toggleClass:"mobileHomepage__projectImage--fourthProject",
                  once: true,
              }
          });
          break;
          case images[4]:
            gsap.to(images[4], {
              scrollTrigger: {
                  trigger: images[4],
                  start: 'top bottom+=120',
                  toggleClass:"mobileHomepage__projectImage--fifthProject",
                  once: true,
              }
          });
            break;
            case images[5]:
            gsap.to(images[5], {
              scrollTrigger: {
                  trigger: images[5],
                  start: 'top bottom+=120',
                  toggleClass:"mobileHomepage__projectImage--sixthProject",
                  once: true,
              }
          });
            break;
        default:
          break;
      }
    })


    sections.forEach((section) => {
  
      gsap.to(section, { y:0, opacity:1,
        scrollTrigger: {
            trigger: section,
            start: 'top bottom-=60',
            end: 'bottom-=10 center',
            scrub:true,
        }
    });
      
    })


    
    }

  })
  function setCameraPosition() {
    if(windowSizeRef2.current === true){
     camera.current.position.z = 1823.50
     camera.current.position.y = -250
  }
   }

  function onLoad(spline) {
    const camera3d = spline.findObjectByName('Camera')
    camera.current = camera3d; 
    setCameraPosition();
  }

    return (
        <div className="mobileHomepage">
          {windowSizeRef.current && <div className="mobileHomepage__3DScene mobileHomepage__splineScene--disableMobile">
          <Suspense fallback={<div></div>}>
     <Spline onLoad={onLoad} scene="https://prod.spline.design/WGjefNVHePGAEdmx/scene.splinecode"/> </Suspense>
     </div>}

            <div className="mobileHomepage__projectsContainer">
                <div className="mobileHomepage__projects">
               
          
            <div className="mobileHomepage__projectInfo">
              <div className="mobileHomepage__titleSection">
              <p className="mobileHomepage__number">01</p>
              <div className="mobileHomepage__title">
                  <h3 className="mobileHomepage__projectTitle">
                  {JSONData.NilsB.title}
                </h3><hr></hr></div>
              </div>
              
              <p className="mobileHomepage__projectDescription">
                {JSONData.NilsB.description}
              </p>
              <hr></hr>
            </div>
            <div className="mobileHomepage__imageContainer">

            <div className="mobileHomepage__projectImage"></div>
            </div>
              <div className="mobileHomepage__link">
                <button
                  className="mobileHomepage__projectLink"
                  onClick={projectLink}
                >
                  VISIT
                </button>
              </div>
                </div>
                <div className="mobileHomepage__projects">
               
          
            <div className="mobileHomepage__projectInfo">
              <div className="mobileHomepage__titleSection">
              <p className="mobileHomepage__number">02</p>
              <div className="mobileHomepage__title">
                  <h3 className="mobileHomepage__projectTitle">
                  {JSONData.WSCBAU.title}
                </h3><hr></hr></div>
              </div>
              
              <p className="mobileHomepage__projectDescription">
                {JSONData.WSCBAU.description}
              </p>
              <hr></hr>
            </div>
            <div className="mobileHomepage__imageContainer">
            <div className="mobileHomepage__projectImage"></div>
            </div>
              <div className="mobileHomepage__link">
                <button
                  className="mobileHomepage__projectLink"
                  onClick={projectLink2}
                >
                  VISIT
                </button>
              </div>
                </div>
                <div className="mobileHomepage__projects">
               
          
            <div className="mobileHomepage__projectInfo">
              <div className="mobileHomepage__titleSection">
              <p className="mobileHomepage__number">03</p>
              <div className="mobileHomepage__title">
                  <h3 className="mobileHomepage__projectTitle">
                  {JSONData.UCNAmbassadors.title}
                </h3><hr></hr></div>
              </div>
              
              <p className="mobileHomepage__projectDescription">
                {JSONData.UCNAmbassadors.description}
              </p>
              <hr></hr>
            </div>
            <div className="mobileHomepage__imageContainer">

            <div className="mobileHomepage__projectImage"></div>
            </div>
              <div className="mobileHomepage__link">
                <button
                  className="mobileHomepage__projectLink"
                  onClick={projectLink3}
                >
                  VISIT
                </button>
              </div>
                </div>
                <div className="mobileHomepage__projects">
               
          
            <div className="mobileHomepage__projectInfo">
              <div className="mobileHomepage__titleSection">
              <p className="mobileHomepage__number">04</p>
              <div className="mobileHomepage__title">
                  <h3 className="mobileHomepage__projectTitle">
                  {JSONData.UXBulgaria.title}
                </h3><hr></hr></div>
              </div>
              
              <p className="mobileHomepage__projectDescription">
                {JSONData.UXBulgaria.description}
              </p>
              <hr></hr>
            </div>
            <div className="mobileHomepage__imageContainer">
            <div className="mobileHomepage__projectImage"></div>
            </div>
              <div className="mobileHomepage__link">
                <button
                  className="mobileHomepage__projectLink"
                  onClick={projectLink4}
                >
                  VISIT
                </button>
              </div>
                </div>

                <div className="mobileHomepage__projects">
               
          
            <div className="mobileHomepage__projectInfo">
              <div className="mobileHomepage__titleSection">
              <p className="mobileHomepage__number">05</p>
              <div className="mobileHomepage__title">
                  <h3 className="mobileHomepage__projectTitle">
                  {JSONData.Trailer3d.title}
                </h3><hr></hr></div>
              </div>
              
              <p className="mobileHomepage__projectDescription">
                {JSONData.Trailer3d.description}
              </p>
              <hr></hr>
            </div>
            <div className="mobileHomepage__imageContainer">
            <div className="mobileHomepage__projectImage"></div>
            </div>
              <div className="mobileHomepage__link">
                <button
                  className="mobileHomepage__projectLink"
                  onClick={projectLink5}
                >
                  VISIT
                </button>
              </div>
                </div>


                <div className="mobileHomepage__projects">
               
          
            <div className="mobileHomepage__projectInfo">
              <div className="mobileHomepage__titleSection">
              <p className="mobileHomepage__number">06</p>
              <div className="mobileHomepage__title">
                  <h3 className="mobileHomepage__projectTitle">
                  {JSONData.TuborgAnimation.title}
                </h3><hr></hr></div>
              </div>
              
              <p className="mobileHomepage__projectDescription">
                {JSONData.TuborgAnimation.description}
              </p>
              <hr></hr>
            </div>
            <div className="mobileHomepage__imageContainer">
            <div className="mobileHomepage__projectImage"></div>
            </div>
              <div className="mobileHomepage__link">
                <button
                  className="mobileHomepage__projectLink"
                  onClick={projectLink6}
                >
                  VISIT
                </button>
              </div>
                </div>

            </div>
            {windowSizeRef.current && 
                  <Link to="/aboutMe/"> 
            <div className="mobileHomepage__secondScene">
          <Suspense fallback={<div></div>}>
     <Spline scene="https://prod.spline.design/siqksJsvDqhuyrtm/scene.splinecode"/> </Suspense>
     </div>
     </Link>}
     
        </div>
    )
}

export default MProjects
