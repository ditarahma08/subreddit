import Image from "next/image";
import LogoReddit from "public/reddit.svg";
import { useState } from "react";

export default function Comment({ data }) {
  const [openComment, setOpenComment] = useState(false);

  function renderInfo() {
    return (
      <>
        <div className="flex items-center">
          <span className="text-xs font-bold">{data.posted_by}</span>
          <span className="mx-2">&middot;</span>
          <span className="text-xs">{data.posted_at}</span>
        </div>
      </>
    );
  }

  function renderContent() {
    return (
      <>
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
      </>
    );
  }

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
        {renderInfo()}
        {renderContent()}

        {data.comment.length > 0 && !openComment && (
          <a
            className="text-xs mt-3 cursor-pointer"
            onClick={() => setOpenComment(true)}
          >
            {data.comment.length} more reply
          </a>
        )}

        {openComment &&
          data.comment.length > 0 &&
          data.comment.map((item, index) => (
            <div className="flex items-start mt-3">
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
                {renderInfo()}
                {renderContent()}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
