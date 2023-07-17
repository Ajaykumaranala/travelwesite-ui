import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import contactimg from "../Assests/2 (1).jpg";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={contactimg}
        title="Contact"
        btnclass="hide"
      />
    </>
  );
}
export default Contact;
