//image de présentation
import Hero_person from "../assets/images/Hero/computersvg.svg";

const Hero = () => {

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-center justify-center items-center">
        
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >

        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2>Développeur Front-end</h2>
          <br />
          
          <p>Bienvenue sur mon portfolio, où l'innovation rencontre la créativité.</p>

          <div className="flex justify-end gap-10 mt-10 md:justify-start">

          <a  href="#about" className="btn hover:bg-white">
            A propos
          </a>

          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[25rem] h-96">
          <img
            src={Hero_person}
            data-aos="slide-up"
            alt="une image d ordinateur"
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
