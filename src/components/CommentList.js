import Comment from "./Comment";

export default function CommentList({ data }) {
  console.log(">>>", data);
  return (
    <div className="mt-4">
      <div className="flex text-xs gap-x-2 items-center">
        <p>Sort by:</p>
        <p>Best</p>
      </div>

      <button className="bg-blue-700 rounded-3xl text-white font-bold px-3 py-2">
        Add a comment
      </button>

      {data &&
        data.length > 0 &&
        data.map((comment, index) => (
          <div className="mt-4" key={index}>
            <Comment data={comment} />
          </div>
        ))}
    </div>
  );
}
