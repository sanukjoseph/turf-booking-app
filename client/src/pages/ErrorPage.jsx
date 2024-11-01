import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-4">Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
        <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded">
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
