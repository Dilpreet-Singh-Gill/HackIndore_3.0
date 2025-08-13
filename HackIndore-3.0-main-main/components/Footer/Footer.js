import React from "react";
import styles from "./Footer.module.css";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
import Container from "@/components/Container/Container";
import Map from "./Map";
import Ending from "./Ending";
import Heading from "../Heading/Heading";

const Footer = () => {
  return (
    <footer id="contact" className="footer container">
      {/* <div className="headings_glittered">
        <AnimatedText>
          <h1>Contact Us</h1>
        </AnimatedText>
      </div> */}
      <div className="headings_glittered">
        <Heading>Contact Us</Heading>
      </div>
      <Map />
      <Container className={styles.responsive}>
        <Ending />
      </Container>
    </footer>
  );
};

export default Footer;

{
  /* <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>

                    <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>

                    <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-google"></i>
                    </a>

                    <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>

                    <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-linkedin-in"></i>
                    </a>

                    <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                </section>
            </div> */
}

// <footer>
//   <div className={styles.container}>
//     <div className={styles.content}>
//       <div className={styles.col}>
//         <p>Contact us</p>
//         <p>
//           Ye #include club me hona kya ek galti hai? <br />
//           Kyuki ye sab krna pad rha vo bhi akele 😓
//         </p>
//         <div className={styles.flex}>
//           <div className={styles.colInfo}>
//             <p>
//               PHONE NUMBER <br />
//               <span>+91 Koi ka bhi dedo</span>
//             </p>
//             <p>
//               OUR LOCATION <br />
//               <span>
//                 ATC Floor 3
//                 <br />
//                 SGSITS, Indore
//               </span>
//             </p>
//           </div>
//           <div className={styles.colInfo}>
//             <p>
//               EMAIL ADDRESS <br />
//               <span>us@example.com</span>
//             </p>

//             <p>
//               WORKING HOURS <br />
//               <span>Mon-sat 10:00pm - 7:00pm</span>
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className={styles.col}>
//         <p>Follow us on social networks:</p>
//         <div className={styles.social}>
//           <img src="https://i.postimg.cc/44pPB9wk/facebook.png" alt="" />
//           <img src="https://i.postimg.cc/L8Q3nB4f/twitter.png" alt="" />
//           <img src="https://i.postimg.cc/TYG9S3Hy/instagram.png" alt="" />
//           <img src="https://i.postimg.cc/kGCxkTwr/youtube.png" alt="" />
//           <img src="https://i.postimg.cc/CKZHDBd2/telegram.png" alt="" />
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className={styles.contentFoot}>
//     <div className={styles.container}></div>
//   </div>
// </footer>

{
  /* <footer id="contact" className="footer container">
  <div className="headings_glittered">
    <AnimatedText>
      <h1>Contact Us</h1>
    </AnimatedText>
  </div>

  <Container>
    <Map />
  </Container>

  <div className={styles.cwrapper}>
    <div>
      <div>Mail Us</div>
      <div>include@gmail.com</div>
    </div>
    <div>
      <div>Meet Us</div>
      <div>
        SGSITS, Indore
        <br />
        Madhya Pradesh, India
      </div>
    </div>
  </div>

  <div className={styles.copyright}>
    <h6>© {new Date().getFullYear()} HackIndore. All rights reserved.</h6>

    <h6 className="flex items-center">
      Crafted with &#x1F49B; by #include Team.
    </h6>
  </div>
</footer>; */
}
