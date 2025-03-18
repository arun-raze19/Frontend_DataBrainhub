import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const ContentAreaPage = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth); // Assumes 'auth' slice holds user info

  // Redirect to login page if user is not authenticated
  if (!user) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-3xl font-semibold mb-8">Please Log In</h1>
        <p>You must be logged in to view this content.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => navigate("/login")}
        >
          Go to Login
        </button>
      </div>
    );
  }

  // Check if user is an admin
  const isAdmin = user.role === "admin";

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-semibold mb-8">Content Area</h1>
      <div className="overflow-y-auto h-[80vh]">
        <div className="flex flex-col items-center mt-10 space-y-8">
          {isAdmin ? (
            <>
              {/* Admin Content */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-3/4 hover:scale-105 transform transition duration-300">
                <Link to="/firstyear" className="text-gray-800 no-underline">
                  <h2 className="text-2xl font-bold mb-4">First Year Books (Admin)</h2>
                </Link>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-3/4 hover:scale-105 transform transition duration-300">
                <Link to="/secondyear" className="text-gray-800 no-underline">
                  <h2 className="text-2xl font-bold mb-4">Second Year Books (Admin)</h2>
                </Link>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-3/4 hover:scale-105 transform transition duration-300">
                <Link to="/thirdyear" className="text-gray-800 no-underline">
                  <h2 className="text-2xl font-bold mb-4">Third Year Books (Admin)</h2>
                </Link>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-3/4 hover:scale-105 transform transition duration-300">
                <Link to="/finalyear" className="text-gray-800 no-underline">
                  <h2 className="text-2xl font-bold mb-4">Final Year Books (Admin)</h2>
                </Link>
              </div>

              {/* Additional Admin Links */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-3/4 hover:scale-105 transform transition duration-300">
                <Link to="/userlist" className="text-gray-800 no-underline">
                  <h2 className="text-2xl font-bold mb-4">User List</h2>
                </Link>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-3/4 hover:scale-105 transform transition duration-300">
                <Link to="/classbridge" className="text-gray-800 no-underline">
                  <h2 className="text-2xl font-bold mb-4">ClassBridge</h2>
                </Link>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-3/4 hover:scale-105 transform transition duration-300">
                <Link to="/journalsadmin" className="text-gray-800 no-underline">
                  <h2 className="text-2xl font-bold mb-4">Journals (Admin)</h2>
                </Link>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-3/4 hover:scale-105 transform transition duration-300">
                <Link to="/circularadmin" className="text-gray-800 no-underline">
                  <h2 className="text-2xl font-bold mb-4">Circular (Admin)</h2>
                </Link>
              </div>
            </>
          ) : (
            <>
              {/* User Content */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-3/4 hover:scale-105 transform transition duration-300">
                <Link to="/firstyearstudent" className="text-gray-800 no-underline">
                  <h2 className="text-2xl font-bold mb-4">First Year Books (User)</h2>
                </Link>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-3/4 hover:scale-105 transform transition duration-300">
                <Link to="/secondyearstudent" className="text-gray-800 no-underline">
                  <h2 className="text-2xl font-bold mb-4">Second Year Books (User)</h2>
                </Link>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-3/4 hover:scale-105 transform transition duration-300">
                <Link to="/thirdyearstudent" className="text-gray-800 no-underline">
                  <h2 className="text-2xl font-bold mb-4">Third Year Books (User)</h2>
                </Link>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-3/4 hover:scale-105 transform transition duration-300">
                <Link to="/finalyearstudent" className="text-gray-800 no-underline">
                  <h2 className="text-2xl font-bold mb-4">Final Year Books (User)</h2>
                </Link>
              </div>

              {/* Additional User Links */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-3/4 hover:scale-105 transform transition duration-300">
                <Link to="/classbridge" className="text-gray-800 no-underline">
                  <h2 className="text-2xl font-bold mb-4">ClassBridge</h2>
                </Link>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-3/4 hover:scale-105 transform transition duration-300">
                <Link to="/journalsuser" className="text-gray-800 no-underline">
                  <h2 className="text-2xl font-bold mb-4">Journals (User)</h2>
                </Link>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-3/4 hover:scale-105 transform transition duration-300">
                <Link to="/circularuser" className="text-gray-800 no-underline">
                  <h2 className="text-2xl font-bold mb-4">Circular (User)</h2>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentAreaPage;




