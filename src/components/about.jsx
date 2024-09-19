import { content } from "../Content";

// <img src={content.logo} alt="..." className="mx-auto" />

const Services = () => {
  return (
    <section id="about">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
        à propos de moi
        </h2>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          
            <div

              data-aos="fade-up"
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
            >
              <h6 className="my-3">Bonjour !</h6>
              <p className="leading-7">Je suis Félix, un jeune développeur front-end passionné depuis tout petit par le monde du développement, mais aussi par le monde informatique et les nouvelles technologies. J'ai franchi le cap de me former sérieusement dans ce domaine. J'ai pu apprendre beaucoup de nouvelles choses et de méthodologies. Je compte bien continuer à apprendre, car c'est ce qui me fait me lever tous les matins ainsi que les nouveaux défis qui m'attendent.</p>
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default Services;
