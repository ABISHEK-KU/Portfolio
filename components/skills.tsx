import { skillsData } from "../data/skills"

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl mb-4">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{skill.title}</h3>
              <p className="text-gray-600 text-sm">{skill.technologies}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
