import React from 'react'
import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vue.js']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs']
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Figma', 'CI/CD', 'Agile']
    }
  ]

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <div key={i} className="skill-item">{skill}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
