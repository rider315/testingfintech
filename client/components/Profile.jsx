// import React from "react";
// import {GrFacebook} from "react-icons/gr";
// import {FaTwitter} from "react-icons/fa";



// export const Profile=()=>{
//     return(
//         <>
//          <div className="max-w-2xl mx-auto my-20 grid grid-cols-1 gap-8 bg-white md:grid-cols-2 rounded-lg shadow-lg md:place-items-center overflow-hidden">
//             <article>
//                 <img className="md:h-64 md:object-cover" src="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=400" alt="sorry" />
//             </article>
//             <article className="md:pr-8">
//                 <h3 className="text-2xl mb-4">Gaurav Chaudhary</h3>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum unde sapiente distinctio vitae mollitia consequuntur?</p>
//             <ul className="flex items-center justify-start gap-4 mt-8">
//                 <li><GrFacebook className="text-2xl text-slate-600"/></li>
//                 <li><FaTwitter className="text-2xl text-slate-600"/></li>
               
//             </ul>
//             </article>
//          </div>
//         </>
//     )
// }


// import React from "react";
// import { GrFacebook } from "react-icons/gr";
// import { FaTwitter } from "react-icons/fa";
// import "./Profile.css"; // Importing the new CSS file

// export const Profile = () => {
//     return (
//         <>
//             <div className="profile-container">
//                 <article className="profile-image-container">
//                     <img
//                         className="profile-image"
//                         src="..\..\src\images\IMG-20220624-WA0001.jpg"
//                         alt="Gaurav Chaudhary"
//                     />
//                 </article>
//                 <article className="profile-text-container">
//                     <h3 className="profile-name">Gaurav Chaudhary</h3>
//                     <p className="profile-description">
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum unde sapiente distinctio vitae mollitia consequuntur?
//                     </p>
//                     <ul className="profile-social-links">
//                         <li><GrFacebook className="social-icon" /></li>
//                         <li><FaTwitter className="social-icon" /></li>
//                     </ul>
//                 </article>
//             </div>
//         </>
//     );
// };


// import React from "react";
// import { GrFacebook, GrInstagram } from "react-icons/gr";
// import { FaTwitter, FaWhatsapp } from "react-icons/fa";
// import "./Profile.css"; // Importing the new CSS file

// export const Profile = () => {
//     return (
//         <div className="profile-container">
//             <article className="profile-image-container">
//                 <img
//                     className="profile-image"
//                     src="/images/mypic.jpg"
//                     alt="Gaurav Chaudhary"
//                 />
//             </article>
//             <article className="profile-text-container">
//                 <h3 className="profile-name">Gaurav Chaudhary</h3>
//                 <ul className="profile-social-links">
//                     <li><GrFacebook className="social-icon" /></li>
//                     <li><GrInstagram className="social-icon" /></li>
//                     <li><FaTwitter className="social-icon" /></li>
//                     <li><FaWhatsapp className="social-icon" /></li>
//                 </ul>
//             </article>
//         </div>
//     );
// };

import React from "react";
import { GrFacebook, GrInstagram } from "react-icons/gr";
import { FaTwitter, FaWhatsapp } from "react-icons/fa";
import "./Profile.css"; // Importing the new CSS file

export const Profile = () => {
    return (
        <div className="maincontainer">

        
        <div className="profile-container">
            <article className="profile-image-container">
                <img
                    className="profile-image"
                    src="/images/mypic.jpg"
                    alt="Gaurav Chaudhary"
                />
            </article>
            <article className="profile-text-container">
                <h3 className="profile-name">Gaurav Chaudhary</h3>
                <ul className="profile-social-links">
                    <li>
                        <GrFacebook className="social-icon" />
                    </li>
                    <li>
                        <a href="https://www.instagram.com/___mr._gaurav__1/?hl=en" target="_blank" rel="noopener noreferrer">
                            <GrInstagram className="social-icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/rider_infinity3" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="social-icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/8650119836" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="social-icon" />
                        </a>
                    </li>
                </ul>
            </article>
        </div>
        </div>
    );
};
