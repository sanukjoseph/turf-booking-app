import { Link } from "react-router-dom";
// import HeroImage from "../assets/hero-image.jpg"; // Assuming you have a hero image in assets

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        // style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white p-4">
          <h1 className="text-5xl font-bold mb-4">Book Your Turf Effortlessly</h1>
          <p className="text-xl mb-6 max-w-lg mx-auto">
            Find the best turfs, book instantly, and enjoy an uninterrupted gaming experience.
          </p>
          <Link
            to="/register"
            className="inline-block bg-green-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-green-600 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-green-500 mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm4.93 5.07a.75.75 0 010 1.06L11.06 14.5l-2.32-.94 2.94-2.94a.75.75 0 011.06 0zm-8.49 9.68a.75.75 0 111.06-1.06l1.12 1.12a.75.75 0 01-1.06 1.06zm4.48 2.1a.75.75 0 010-1.06l1.12-1.12a.75.75 0 111.06 1.06l-1.12 1.12a.75.75 0 01-1.06 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Booking</h3>
              <p className="text-gray-600">
                Book your favorite turf in just a few clicks with real-time availability.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-green-500 mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2A10 10 0 102 12 10 10 0 0012 2zm-1 17.93V13H9a1 1 0 01-1-1v-2a1 1 0 011-1h2V6.07a8.006 8.006 0 010 15.86z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Affordable Rates</h3>
              <p className="text-gray-600">
                Get access to premium turfs at the best rates in town.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-green-500 mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2 5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H9l-4 4v-4H4a2 2 0 01-2-2zm4 7a2 2 0 104-0 2 2 0 10-4 0zm6 0a2 2 0 104-0 2 2 0 10-4 0zm6 0a2 2 0 104-0 2 2 0 10-4 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Variety of Turfs</h3>
              <p className="text-gray-600">
                Choose from a wide range of turfs to find the perfect match.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="mb-2">&copy; 2024 Turf Booking App. All rights reserved.</p>
          <Link to="/login" className="mx-2 text-blue-400 hover:underline">Login</Link>
          <Link to="/register" className="mx-2 text-blue-400 hover:underline">Register</Link>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
