import ReasonCard from './ReasonCard';

function ReasonsToJoin({ title, reasons }) {
  return (
    <div className="bg-black py-10 px-16">
      <h2 className="text-white text-3xl mb-6">{title}</h2>
      <div className="grid grid-cols-4 gap-5">
        {reasons.map((reason) => (
          <ReasonCard key={reason.id} reason={reason} />
        ))}
      </div>
    </div>
  );
}

export default ReasonsToJoin;