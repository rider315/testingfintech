// export const Newsletter=()=>{
//     return(
//         <>
//             <section className=" py-20 px-5  bg-gradient-to-r from-indigo-600 to-slate-800">
//                 <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8 text-center md:text-left
//                 md:grid-cols-2 md:gap-16 md:place-items--center">
//                 <article>
//                     <h2 className="text-white text-3xl lg:text-4xl md:text-left mb-4">
//                        Signup to the newsletter 
//                     </h2>
//                     <p className="text-slate-100">Receive the latest updates</p>
//                 </article>
//                 <article>
//                     <form>
//                         <input type="email" name="email" id="email" placeholder="example@example.com" className="w-fully py-2 px-4 rounded shadow mb-4 bg-transparent border border-slate-200 placeholder-slate-300 text-slate-300 tracking-wide" required />
//                         <button className="bg-white py-2 px-8 rounded shadow text-slate-800 tracking-wide hover:opacity-75 transition-all duration-200 w-full md:w-auto" type="submit">Subscribe</button>
//                     </form>
//                 </article>
//                 </div>
//             </section>
//         </>
//     )
// }



import React from "react";
import "./Newsletter.css"; // Importing the new CSS file

export const Newsletter = () => {
    return (
        <>
            <section className="newsletter-section">
                <div className="newsletter-container">
                    <article>
                        <h2 className="newsletter-title">
                            Signup to the newsletter
                        </h2>
                        <p className="newsletter-subtitle">
                            Receive the latest updates
                        </p>
                    </article>
                    <article>
                        <form>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="example@example.com"
                                className="newsletter-input"
                                required
                            />
                            <button
                                className="newsletter-button"
                                type="submit"
                            >
                                Subscribe
                            </button>
                        </form>
                    </article>
                </div>
            </section>
        </>
    );
};
