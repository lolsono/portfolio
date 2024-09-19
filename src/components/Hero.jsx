//image de présentation
import Hero_person from "../assets/images/Hero/computersvg.svg";

const Hero = () => {

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >

          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            OTTAVI {" "}
            <span className="text-dark_primary">Félix</span>
          </h1>

        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2>Developpeur web</h2>
          <br />
          
          <p>Bienvenue sur le portfolio de Félix Ottavi, où l'innovation rencontre la créativité.</p>

          <div className="flex flex-col gap-10 mt-10">

          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[25rem] h-96">
          <img
            src={Hero_person}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
