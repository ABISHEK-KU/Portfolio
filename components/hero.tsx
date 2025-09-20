import Image from "next/image"

export default function Hero() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Abishek"
              width={128}
              height={128}
              className="rounded-full"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Abishek K</h1>
          <p className="text-xl text-blue-600 mb-6">Full Stack Developer</p>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Software Engineer with 2.7 + years of experience in full-stack and desktop application development. Skilled in building scalable web platforms and performant desktop applications using React, Vue Electron, Node.js, MongoDb and MySQL. Experienced in translating UI/UX designs into functional interfaces, working with real-time data (sockets/APIs), and ensuring efficient system integrations across tech stacks.
          </p>
        </div>
      </div>
    </section>
  )
}
