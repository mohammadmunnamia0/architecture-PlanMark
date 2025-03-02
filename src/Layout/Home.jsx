import Articles from "../Components/Articles";
import Banner from "../Components/Banner";
import Clients from "../Components/Clients";
import Contact from "../Components/Contact";
import Experience from "../Components/Experience";
import FeatureProject from "../Components/FeatureProject";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import PromoVideo from "../Components/PromoVideo";
// import Review from "../Components/Review";
import Services from "../Components/Services";
import Team from "../Components/Team";
import Testimonial21 from "../Components/Testimonial21";

import WorkProcess from "../Components/WorkProcess";
import Contact2 from "../Components/Contact2";
import ContactInfo from "../Components/ContactInfo";
import ContactForm from "../Components/ContactForm";

function Home() {
  return (
    <div className="items-center">
      <Navbar></Navbar>
      <Banner></Banner>
      <Experience></Experience>
      <Services></Services>
      <Clients></Clients>
      <FeatureProject></FeatureProject>
      <WorkProcess></WorkProcess>
      <Articles></Articles>
      <Team></Team>
      <PromoVideo></PromoVideo>
      <Testimonial21></Testimonial21>
      <Contact></Contact>
      <Contact2/>
      <ContactInfo></ContactInfo>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}

export default Home;
