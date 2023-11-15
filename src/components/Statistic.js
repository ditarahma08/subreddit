export default function Statistic(props) {
  return (
    <div className="mt-2 flex gap-x-2">
      <button className="bg-slate-300 rounded-3xl text-xs py-2 px-3">
        {props.comment}
      </button>
      <button className="bg-slate-300 rounded-3xl text-xs py-2 px-3">
        {props.upvote}
      </button>
    </div>
  );
}
