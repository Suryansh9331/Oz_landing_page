import TimelineMarquee from "../../components/Timeline";
import { useState} from 'react';
import Navbar from "../../components/Navbar";
import BannerSection from "../../components/HeroBanner";
import PopupForm from "../../components/PopUpForm";
import BenefitSection from "../../components/BenefitSection";
import StickyButton from "../../components/StickyDownloadButton";
import TrainingServices from "../../components/OurServices";
import CoursesOverview from "../../components/CoursesOverview";
import Timer from "../../components/ScarcityTimer";
import CertificateOverview from "../../components/CertificateOverview";
import StudentRegistrationForm from "../../components/RegisterForm";
import About from "../../components/About";
import Testimonial from "../../components/testimonial";
import DownloadSyllabusSection from "../../components/DownloadSyllabus";
const Home = () => {
     const [isPopupOpen, setIsPopupOpen] = useState(false);


    return (
        <div className="">
         <TimelineMarquee />
         <Navbar/>
            <BannerSection setIsOpen={setIsPopupOpen} />
           <StickyButton setIsOpen={setIsPopupOpen} />

      {/* Popup Form - controlled by sticky button */}
      <PopupForm isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} />
       {/* <PopupForm />  */}
            <BenefitSection/>
            <CoursesOverview/>
            <DownloadSyllabusSection setIsOpen={setIsPopupOpen}/>
            <TrainingServices setIsOpen={setIsPopupOpen}/>
            <Timer />
            <CertificateOverview setIsOpen={setIsPopupOpen}/>
            <StudentRegistrationForm/>
            {/* <About/> */}
<Testimonial/>
        </div>
    );
    }
export default Home;