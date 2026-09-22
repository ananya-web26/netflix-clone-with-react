import ReasonCard from './ReasonCard';

function ReasonsToJoin() {
  return (
    <div className="bg-black py-10 px-16">
      <h2 className="text-white text-3xl mb-6">More reasons to join</h2>
      <div className="grid grid-cols-4 gap-5">
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