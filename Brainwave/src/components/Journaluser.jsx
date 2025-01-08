import React, { useState, useEffect } from "react";
import axios from "axios";

const Firstyear = () => {
  const [allImage, setAllImage] = useState([]);

  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    try {
      const result = await axios.get("http://localhost:5000/get-files7");
      setAllImage(result.data.data);
    } catch (error) {
      console.error("Error fetching PDFs:", error);
    }
  };

  const showPdf = (pdf) => {
    window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Journals!!</h1>
        <p className="text-gray-600">Hi, welcome to the Journals section!</p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h4 className="text-xl font-bold mb-4">Uploaded PDFs:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allImage.map((data) => (
            <div key={data._id} className="bg-gray-100 rounded-lg p-4 shadow-md">
              <h6 className="text-gray-800 font-semibold mb-2">Title: {data.title}</h6>
              <button
                onClick={() => showPdf(data.pdf)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
              >
                Show PDF
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Firstyear;