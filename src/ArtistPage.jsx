 const ArtistPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md px-6 py-8 rounded-lg bg-[#121212] shadow-lg">
        <h1 className="text-2xl font-semibold mb-6">Artist Page</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-md bg-black text-white border border-gray-600 focus:outline-none focus:border-primary"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="release-date"
              className="block text-sm font-medium mb-1"
            >
              Release Date
            </label>
            <input
              type="datetime-local"
              id="release-date"
              className="w-full px-4 py-2 rounded-md bg-black text-white border border-gray-600 focus:outline-none focus:border-primary"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="time-zone"
              className="block text-sm font-medium mb-1"
            >
              Time Zone
            </label>
            <select
              id="time-zone"
              className="w-full px-4 py-2 rounded-md bg-black text-white border border-gray-600 focus:outline-none focus:border-primary"
            >
              <option value="GMT+01:00">GMT+01:00</option>
              <option value="GMT+02:00">GMT+02:00</option>
              <option value="GMT+03:00">GMT+03:00</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="song-link"
              className="block text-sm font-medium mb-1"
            >
              Enter a Song Link
            </label>
            <input
              type="url"
              id="song-link"
              placeholder="Paste your song link here"
              className="w-full px-4 py-2 rounded-md bg-black text-white border border-gray-600 focus:outline-none focus:border-primary"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-primary text-black font-semibold hover:bg-yellow-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ArtistPage;
