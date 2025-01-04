 
import { FaSpotify, FaCheck } from "react-icons/fa";

const FanPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md px-6 py-8 rounded-lg  shadow-lg">
        <h1 className="text-2xl font-semibold mb-6">Fan Page</h1>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-lg font-medium">Name</p>
            <p className="text-sm text-gray-400">Time</p>
          </div>
          <div className="text-green-500 text-xl font-bold"><FaCheck/></div>
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
    </div>
  );
};

export default FanPage;
