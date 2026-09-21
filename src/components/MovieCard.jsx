import './MovieCard.css';

function MovieCard(props) {
  return (
    <div className="movie-card">
      <img src={props.image} alt={props.title} className="movie-image" />
      <span className="movie-number">{props.number}</span>
    </div>
  );
}

export default MovieCard;