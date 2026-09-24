import { useState } from 'react';
import MovieCard from './MovieCard';

function TrendingNow({ title, movies }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-neutral-900 py-10 px-16">
      <h2 className="text-white text-2xl mb-5">{title}</h2>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-5 px-4 py-2 rounded bg-black text-white border border-gray-600"
      />
      <div className="flex gap-7 overflow-x-auto">
        {filteredMovies.map((movie, index) => (
          <MovieCard key={movie.id} movie={movie} number={index + 1} />
        ))}
      </div>
    </div>
  );
}

export default TrendingNow;