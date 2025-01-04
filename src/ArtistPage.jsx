import { useState } from "react";

const ArtistPage = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [timeZone, setTimeZone] = useState("GMT+01:00");
  const [songLink, setSongLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState("");

  const handleCreateFanPageLink = async (e) => {
    e.preventDefault();

    setLoading(true); // Set loading to true when the API call is about to happen
    setNotification(""); // Clear previous notifications

    // Prepare the data to be sent in the request
    const requestData = {
      title,
      artist: name,
      releaseDate,
      timeZone,
      songLink,
    };

    try {
      // Make the API request to the presave endpoint
      const response = await fetch("http://localhost:8000/presave", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      if (response.ok) {
        setNotification(window.location.origin + "/fan-page/" + data.id);
      } else {
        setNotification(`Error: ${data.message || "Something went wrong"}`);
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setNotification("Error: Failed to create presave link.");
    } finally {
      setLoading(false); // Set loading to false after the request is complete
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#040404] text-white">
      <div className="w-full max-w-[50rem] px-6 py-8 rounded-lg shadow-lg">
        <h1 className="text-4xl text-center font-semibold mb-8 text-gray-400">
          Artist Page
        </h1>
        <form onSubmit={handleCreateFanPageLink}>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              placeholder="Enter your campaign title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-6 rounded-lg text-gray-300 bg-[#2d2c2c7f] focus:outline-none focus:border-primary"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              placeholder="Enter artist name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-6 rounded-lg text-gray-300 bg-[#2d2c2c7f] focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex justify-between gap-3 mt-8">
            <div className="mb-4 w-full">
              <label
                htmlFor="release-date"
                className="block text-lg font-large mb-1 text-gray-300"
              >
                Release Date
              </label>
              <input
                type="datetime-local"
                id="release-date"
                value={releaseDate}
                onChange={(e) => setReleaseDate(e.target.value)}
                className="w-full p-6 rounded-lg cursor-pointer text-gray-300 bg-[#2d2c2c7f] focus:outline-none focus:border-primary"
              />
            </div>

            <div className="mb-4 w-full">
              <label
                htmlFor="time-zone"
                className="block text-lg font-large mb-1 text-gray-300"
              >
                Time Zone
              </label>
              <select
                id="time-zone"
                value={timeZone}
                onChange={(e) => setTimeZone(e.target.value)}
                className="w-full p-6 py-7 rounded-lg text-gray-300 bg-[#2d2c2c7f] focus:outline-none focus:border-primary"
              >
                <option value="GMT+01:00">GMT+01:00</option>
                <option value="GMT+02:00">GMT+02:00</option>
                <option value="GMT+03:00">GMT+03:00</option>
              </select>
            </div>
          </div>

          <div className="mb-7 mt-5">
            <input
              type="url"
              id="song-link"
              placeholder="Paste your song link here"
              value={songLink}
              onChange={(e) => setSongLink(e.target.value)}
              className="w-full p-6 rounded-lg text-gray-300 bg-[#2d2c2c7f] focus:outline-none focus:border-primary"
            />
          </div>

          <button
            type="submit"
            className="w-full py-6 rounded-md bg-primary text-black font-semibold hover:bg-yellow-600"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Creating..." : "Create Presave Link"}
          </button>
        </form>

        {notification && (
          <div
            className={`mt-4 p-4 text-center bg-[#2d2c2c7f] ${
              notification.includes("Error") ? "text-red-500" : "text-green-500"
            }  rounded-md`}
          >
            {notification}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistPage;
