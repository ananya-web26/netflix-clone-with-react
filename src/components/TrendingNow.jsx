import MovieCard from './MovieCard';

function TrendingNow() {
  return (
    <div className="bg-neutral-900 py-10 px-16">
      <h2 className="text-white text-2xl mb-5">Trending Now</h2>
      <div className="flex gap-7 overflow-x-auto">
        <MovieCard number="1" title="Movie 1" image="https://picsum.photos/220/300?random=1" />
        <MovieCard number="2" title="Movie 2" image="https://picsum.photos/220/300?random=2" />
        <MovieCard number="3" title="Movie 3" image="https://picsum.photos/220/300?random=3" />
        <MovieCard number="4" title="Movie 4" image="https://picsum.photos/220/300?random=4" />
        <MovieCard number="5" title="Movie 5" image="https://picsum.photos/220/300?random=5" />
      </div>
    </div>
  );
}

export default TrendingNow;