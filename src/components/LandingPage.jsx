import React, { useEffect, useRef, useState } from 'react';

function LandingPage() {
    const [anime, setAnime] = useState([]);
    const [original, setOriginal] = useState([]);
    const [search, setSearch] = useState('');
    const refer = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetching = await fetch('https://api.jikan.moe/v4/anime');
                if (fetching.ok) {
                    const data = await fetching.json();
                    setAnime(data.data);
                    setOriginal(data.data);
                    refer.current.textContent = fetching.status;
                } else {
                    refer.current.textContent = `Error ${fetching.status}`;
                }
            } catch (error) {
                refer.current.textContent = error.message;
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (!search) {
            setAnime(original);
        } else {
            const time = setTimeout(() => {
                const filterAnime = original.filter((anime) =>
                    anime.title.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim())
                );
                setAnime(filterAnime);
            }, 1000);
            return () => clearTimeout(time);
        }
    }, [search, original]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white p-4">
            <p ref={refer} className="text-center text-lg font-semibold mb-4"></p>
            <input
                className="w-full p-2 mb-6 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
                placeholder="Search for anime..."
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
                {anime.map((anime) => (
                    <div
                        key={anime.title}
                        className="bg-white rounded-lg p-4 shadow-lg text-black hover:shadow-2xl transition-shadow"
                    >
                        <img
                            src={anime.images.jpg.image_url}
                            alt={anime.title}
                            className="w-full h-48 object-cover rounded-md hover:cursor-pointer"
                        />
                        <h1 className="mt-2 text-lg font-bold">{anime.title}</h1>
                        <p className="text-sm text-gray-600">{anime.year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LandingPage;
