export default function Skills() {
  const skillCategories = [
    {
      title: 'Data Analysis',
      skills: [
        { name: 'Python', icon: 'python.png' },
        { name: 'MySQL', icon: 'mysql.png' },
        { name: 'PostgreSQL', icon: 'postgresql.png' },
        { name: 'Excel', icon: 'excel.png' },
        { name: 'Power BI', icon: 'powerbi.png' }
      ]
    },
    {
      title: 'Development',
      skills: [
        { name: 'HTML', icon: 'html.png' },
        { name: 'CSS', icon: 'css.png' },
        { name: 'JavaScript', icon: 'javascript.png' },
        { name: 'Python', icon: 'python.png' },
        { name: 'Flutter', icon: 'flutter.png' },
        { name: 'Laravel', icon: 'laravel.png' }
      ]
    },
    {
      title: 'UI/UX Design',
      skills: [
        { name: 'Figma', icon: 'figma.png' }
      ]
    },
    {
      title: 'Other Tools',
      skills: [
        { name: 'VS Code', icon: 'vscode.png' },
        { name: 'GitHub', icon: 'github.png' }
      ]
    }
  ];

  return (
    <section id="skills">
      <h2 className="section-title">Skills and Tools</h2>
      
      <div className="skills-container">
        <div className="skills-cards">
          {skillCategories.map((category, index) => (
            <div className="skill-card" key={index}>
              <h3>{category.title}</h3>
              <div className="icons">
                {category.skills.map((skill, idx) => (
                  <div className="icon" key={idx}>
                    <img src={`/icons/${skill.icon}`} alt={skill.name} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-description">
          <p>
            These are the programming languages and development tools that I'm familiar with and 
            have already used. Some of them were applied in my previous projects, helping me gain 
            hands-on experience and improve my technical skills.
          </p>
        </div>
      </div>
    </section>
  );
}
