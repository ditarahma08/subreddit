import Image from "next/image";
import LogoReddit from "public/reddit.svg";
import Statistic from "./Statistic";

export default function Post({ data }) {
  return (
    <div>
      <div className="flex items-center">
        <Image
          src={LogoReddit}
          height={32}
          width={32}
          alt="img-profile"
          className="object-cover rounded-full mr-2"
        />
        <div className="text-xs">
          <div>
            <span>r/holdmybeer</span>
            <span className="mx-1">&middot;</span>

            <span>{data.posted_at}</span>
          </div>
          <span className="font-bold">{data.posted_by}</span>
        </div>
      </div>

      <h1 className="font-bold text-4xl my-2">{data.title}</h1>

      <div className="bg-slate-700 rounded-lg flex justify-center mt-4">
        <img src={data.image} width="auto" className="max-h-96" />
      </div>

      <p className="text-sm mt-4">{data.content}</p>

      <Statistic comment={data.comment} upvote={data.upvote} />
    </div>
  );
}
