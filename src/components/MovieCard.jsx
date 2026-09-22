function MovieCard(props) {
  return (
    <div className="relative w-[220px] h-[300px] shrink-0">
      <img
        src={props.image}
        alt={props.title}
        className="w-full h-full object-cover rounded"
      />
      <span
        className="absolute -bottom-2.5 -left-2.5 text-[100px] font-bold text-black"
        style={{ WebkitTextStroke: '3px white' }}
      >
        {props.number}
      </span>
    </div>
  );
}

export default MovieCard;