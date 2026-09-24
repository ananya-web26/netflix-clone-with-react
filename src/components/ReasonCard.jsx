function ReasonCard({ reason }) {
  return (
    <div className="bg-[#1a1a2e] rounded-lg p-8 w-[260px] min-h-[200px]">
      <h3 className="text-white text-xl mb-3">{reason.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
    </div>
  );
}

export default ReasonCard;