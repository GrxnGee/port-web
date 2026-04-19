import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
 
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/home" className="text-xl font-bold text-gray-900">Thanadon Phetmuenwai</Link>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/home" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-bold">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-bold">About</Link>
              <Link href="/projects" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-bold">Projects</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-bold">Contact</Link>
            </div>
          </div>
        </div>
      </nav>


      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to My Portfolio Website
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                This platform features my professional background, academic projects from my university tenure, and a comprehensive overview of my technical expertise.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/about" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                Get Started
              </Link>
              <Link href="/projects" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>


      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Thanadon Phetmuenwai | Software Developer</p>
          </div>
        </div>
      </footer>
    </div>
  );
}