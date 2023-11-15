import Image from "next/image";
import LogoReddit from "public/reddit.svg";

export default function Comment({ data }) {
  return (
    <div className="flex items-start">
      <div className="flex items-center mr-2">
        <Image
          src={LogoReddit}
          height={32}
          width={32}
          alt="img-profile"
          className="object-cover rounded-full mr-2"
        />
      </div>

      <div className="flex flex-column">
        <div className="flex items-center">
          <span className="text-xs font-bold">{data.posted_by}</span>
          <span className="mx-2">&middot;</span>
          <span className="text-xs">{data.posted_at}</span>
        </div>

        <div className="text-xs mt-2">
          <p>{data.content}</p>
        </div>

        <div className="mt-2 flex gap-x-2">
          <button className="bg-slate-300 rounded-3xl text-xs py-2 px-3">
            {data.reply}
          </button>
          <button className="bg-slate-300 rounded-3xl text-xs py-2 px-3">
            {data.upvote}
          </button>
          <button className="bg-slate-300 rounded-3xl text-xs py-2 px-3">
            Reply
          </button>
          <button className="bg-slate-300 rounded-3xl text-xs py-2 px-3">
            Share
          </button>
        </div>

        {data.comment.length > 0 && (
          <a className="text-xs mt-3 cursor-pointer">
            {data.comment.length} more reply
          </a>
        )}
      </div>
    </div>
  );
}
