import ReasonCard from './ReasonCard';
import './ReasonsToJoin.css';

function ReasonsToJoin() {
  return (
    <div className="reasons-section">
      <h2 className="reasons-title">More reasons to join</h2>
      <div className="reasons-row">
        <ReasonCard
          title="Enjoy on your TV"
          description="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        />
        <ReasonCard
          title="Download your shows to watch offline"
          description="Save your favourites easily and always have something to watch."
        />
        <ReasonCard
          title="Watch everywhere"
          description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        />
        <ReasonCard
          title="Create profiles for kids"
          description="Send kids on adventures with their favourite characters in a space made just for them — free with your membership."
        />
      </div>
    </div>
  );
}

export default ReasonsToJoin;