import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience" >
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>React.js</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Next.js</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Redux</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Tailwind CSS</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>UI/UX</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Figma</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>UI research</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Web Design</h4>
            </article>
          </div>
        </div>
        {/* <div className="experience__backend">
          <h3>Back-end Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Ruby</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Ruby on Rails</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>PostgreSQL</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Swagger</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>RSpec</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Git/GitHub</h4>
            </article>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Experience
// import { useState } from "react";
// import { BsFillPatchCheckFill } from "react-icons/bs";
// import "./experience.css";

// const Experience = () => {
//   const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     const cardElements = document.getElementsByClassName("card");
//     const newMouseCoordinates = {
//       x: e.clientX,
//       y: e.clientY,
//     };
//     setMouseCoordinates(newMouseCoordinates);

//     for (const card1 of cardElements) {
//       const rect = card1.getBoundingClientRect();
//       const x = newMouseCoordinates.x - rect.left;
//       const y = newMouseCoordinates.y - rect.top;

//       card1.style.setProperty("--mouse-x", `${x}px`);
//       card1.style.setProperty("--mouse-y", `${y}px`);
//     }
//   };
//   return (
//     <section id="experience">
//       <h5>The Skills I Have</h5>
//       <h2>Skills</h2>
//       <div id="cards" onMouseMove={handleMouseMove}>
//         <div class="card1">
//           <div class="card-content">
//             <div class="card-image">
//               <i class="fa-duotone fa-apartment"></i>
//             </div>
//             <div class="card-info-wrapper">
//               <div class="card-info">
//                 <i class="fa-duotone fa-apartment"></i>
//                 <div class="card-info-title">
//                   <h3>Apartments</h3>
//                   <h4>Places to be apart. Wait, what?</h4>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="card1">
//           <div class="card-content">
//             <div class="card-image">
//               <i class="fa-duotone fa-unicorn"></i>
//             </div>
//             <div class="card-info-wrapper">
//               <div class="card-info">
//                 <i class="fa-duotone fa-unicorn"></i>
//                 <div class="card-info-title">
//                   <h3>Unicorns</h3>
//                   <h4>A single corn. Er, I mean horn.</h4>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="card1">
//           <div class="card-content">
//             <div class="card-image">
//               <i class="fa-duotone fa-blender-phone"></i>
//             </div>
//             <div class="card-info-wrapper">
//               <div class="card-info">
//                 <i class="fa-duotone fa-blender-phone"></i>
//                 <div class="card-info-title">
//                   <h3>Blender Phones</h3>
//                   <h4>These absolutely deserve to exist.</h4>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="card1">
//           <div class="card-content">
//             <div class="card-image">
//               <i class="fa-duotone fa-person-to-portal"></i>
//             </div>
//             <div class="card-info-wrapper">
//               <div class="card-info">
//                 <i class="fa-duotone fa-person-to-portal"></i>
//                 <div class="card-info-title">
//                   <h3>Adios</h3>
//                   <h4>See you...</h4>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="card1">
//           <div class="card-content">
//             <div class="card-image">
//               <i class="fa-duotone fa-person-from-portal"></i>
//             </div>
//             <div class="card-info-wrapper">
//               <div class="card-info">
//                 <i class="fa-duotone fa-person-from-portal"></i>
//                 <div class="card-info-title">
//                   <h3>I mean hello</h3>
//                   <h4>...over here.</h4>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="card1">
//           <div class="card-content">
//             <div class="card-image">
//               <i class="fa-duotone fa-otter"></i>
//             </div>
//             <div class="card-info-wrapper">
//               <div class="card-info">
//                 <i class="fa-duotone fa-otter"></i>
//                 <div class="card-info-title">
//                   <h3>Otters</h3>
//                   <h4>Look at me, imma cute lil fella.</h4>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
