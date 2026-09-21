import './ReasonCard.css';

function ReasonCard(props) {
  return (
    <div className="reason-card">
      <h3 className="reason-title">{props.title}</h3>
      <p className="reason-desc">{props.description}</p>
    </div>
  );
}

export default ReasonCard;