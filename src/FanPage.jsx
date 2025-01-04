import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get route parameters
import { FaSpotify, FaCheck } from "react-icons/fa";
import axios from "axios";
import moment from "moment";

const FanPage = () => {
  const { presaveId } = useParams(); // Extract presaveId from route
  const [presaveData, setPresaveData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = `http://localhost:8000/get-presave`;

  useEffect(() => {
    const fetchPresaveData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${baseUrl}?id=${presaveId}`); 
        setPresaveData(response.data.presave);
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError("Failed to fetch presave data.");
      } finally {
        setLoading(false);
      }
    };

    fetchPresaveData();
  }, [baseUrl, presaveId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md px-6 py-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-6">Fan Page</h1>
        {presaveData ? (
          <div>
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-lg font-medium">{presaveData.artist}</p>
                <p className="text-sm text-gray-400">
                  {moment(presaveData.releaseDate).format("DD MMM, YYYY, hh:mm A")}
                </p>
              </div>
              <div className="text-green-500 text-xl font-bold">
                <FaCheck />
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg text-gray-400 bg-[#121212]">
              <FaSpotify size={40} className="text-[#1DB954]" />
              <div className="flex justify-between w-full items-center">
                <p className="font-medium">Spotify</p>
                <button className="px-4 py-1 mt-1 rounded-lg bg-[#413f3ffd] text-white hover:bg-gray-800">
                  Pre-save
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p>No presave data found.</p>
        )}
      </div>
    </div>
  );
};

export default FanPage;
