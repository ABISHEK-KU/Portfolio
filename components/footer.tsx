import { socialLinks } from "../data/social"

export default function Footer() {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d={link.path} />
                </svg>
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-sm">© 2024 Abishek K. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
