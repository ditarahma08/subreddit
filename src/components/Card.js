import Image from "next/image";
import LogoReddit from "public/reddit.svg";
import Statistic from "./Statistic";

export default function Card(props) {
  return (
    <div
      className="border-b-2 pb-3 cursor-pointer"
      onClick={() => props.openThread()}
    >
      <div className="flex items-center">
        <div className="flex items-center">
          <Image
            src={LogoReddit}
            height={32}
            width={32}
            alt="img-profile"
            className="object-cover rounded-full mr-2"
          />
          <span className="text-xs font-bold">{props.data.posted_by}</span>
        </div>

        <span className="mx-2">&middot;</span>

        <span className="text-xs">{props.data.posted_at}</span>
      </div>

      <div
        className={
          props.style === "classic" ? "flex justify-between mt-2" : "mt-2"
        }
      >
        <div>
          <p className="font-bold text-lg">{props.data.title}</p>

          {props.data.content && props.style !== "compact" && (
            <p>{props.data.content}</p>
          )}
        </div>

        {props.style !== "compact" && props.data.image && (
          <div
            className={`bg-slate-700 rounded-lg flex justify-center ${
              props.style === "classic" ? "w-[150px]" : ""
            }`}
          >
            <img
              src={props.data.image}
              width={props.style === "card" ? "auto" : 150}
              className="max-h-96"
            />
          </div>
        )}
      </div>

      <Statistic comment={props.data.comment} upvote={props.data.upvote} />
    </div>
  );
}
