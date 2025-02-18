import itachi from '../assets/th.jpeg'

function AboutAnime() {
  return (
    <div className="bg-gradient-to-r from-indigo-100 via-blue-50 to-purple-100 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-2xl border border-gray-200">
        <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-6">
          About Anime
        </h2>
        <p className="text-xl text-gray-800 leading-relaxed tracking-wide">
          Anime is a style of animation that originated in Japan and has become popular worldwide. It features colorful artwork, vibrant characters, and fantastical themes. Anime spans many genres, including action, romance, fantasy, science fiction, horror, and slice of life. It appeals to people of all ages and backgrounds, offering a unique form of entertainment.
        </p>
        <div className="my-6">
          <img
            src={itachi}
            alt="Anime Art"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-xl text-gray-800 leading-relaxed tracking-wide">
          Over the years, anime has influenced various other forms of media, including television shows, films, and video games. With its compelling storytelling, intricate character development, and creative animation techniques, anime has become a significant part of global pop culture.
        </p>
        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutAnime;
