import { content } from "../Content";


const Projects = () => {

  const { projects } = content;

  return (
    <section id="projects">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          Projets
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          Mes créations
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {projects.projects_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
            >
              <a  href={content.link}>
                <img src={content.logo} alt="..." className="mx-auto" />
                <h6 className="my-3">{content.title}</h6>
                <p className="leading-7">{content.para}</p>
              </a>
            </div>

          ))}
        </div>
      </div>
  </section>
  );
};

export default Projects;
