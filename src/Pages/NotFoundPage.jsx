import React from "react";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Oops! 404 Not Found</h1>
      <p className="text-lg text-gray-600 mb-4">
        We can't seem to find the page you're looking for.
      </p>
      <a href="/" className="text-blue-500 hover:underline">
        Go back home
      </a>
    </div>
  );
}

export default NotFoundPage;
