export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'LenLens',
      description: 'LenLens is a smart waste management web app using machine learning and geolocation to classify waste and locate disposal facilities.',
      image: '/projects/lenlens.png',
      github: 'https://github.com/FerosC101/LenLens.git',
      role: 'Front-end Developer',
      imageSize: { width: '100px', height: '90px' }
    },
    {
      id: 2,
      title: 'SpartaGo',
      description: 'A mobile gym reservation & equipment borrowing app. Designed UI/UX using Figma with focus on user experience.',
      image: '/projects/spartago.png',
      canva: 'https://canva.link/dimccnry18yjoio',
      tool: 'Figma',
      imageSize: { width: '100px', height: '90px' }
    },
    {
      id: 3,
      title: 'SpartaGo',
      description: 'A mobile gym reservation & equipment borrowing app. Mainly focus in Batangas State University - Alangilan Campus.',
      image: '/projects/spartago.png',
      github: 'https://github.com/Brian-Kristofer-Perez/SpartaGO.git',
      role: 'Front-end Developer',
      imageSize: { width: '100px', height: '90px' }
    },
    {
      id: 4,
      title: 'Kalinga',
      description: 'A central website or app where patients can easily find healthcare facilities, book appointments, and message their doctors.',
      image: '/projects/kalinga.svg',
      github: 'https://github.com/LenardAndrei/Kalinga.git',
      role: 'Front-end Developer',
      imageSize: { width: '100px', height: '90px' }
    }
  ];

  return (
    <section id="project">
      <h2>Project</h2>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} 
            style={project.imageSize ? { width: project.imageSize.width, height: project.imageSize.height, objectFit: 'contain' } : {}} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-info">
              <div>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                )}
                {project.canva && (
                  <a href={project.canva} target="_blank" rel="noopener noreferrer">
                    Canva
                  </a>
                )}
              </div>
              <span>
                {project.role && `Role: ${project.role}`}
                {project.language && `Language: ${project.language}`}
                {project.tool && `Tool: ${project.tool}`}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
