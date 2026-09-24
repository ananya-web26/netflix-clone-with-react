import { useState } from 'react';

function MovieCard({ movie, number }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="relative w-[220px] h-[300px] shrink-0">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-full object-cover rounded"
      />
      <span
        className="absolute -bottom-2.5 -left-2.5 text-[100px] font-bold text-black"
        style={{ WebkitTextStroke: '3px white' }}
      >
        {number}
      </span>
      <button
        onClick={() => setIsLiked(!isLiked)}
        className="absolute top-2 right-2 text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
      >
        {isLiked ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

export default MovieCard;
