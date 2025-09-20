import { educationData } from "../data/education"

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{edu.degree}</h3>
              <p className="text-blue-600 text-sm mb-1">
                {edu.school}, {edu.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
