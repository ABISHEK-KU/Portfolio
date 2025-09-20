import { experienceData } from "../data/experience"

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Experience</h2>
        <div className="space-y-8">
          {experienceData.map((job, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                <p className="text-blue-600 text-sm mb-1">
                  {job.company} ({job.period})
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
