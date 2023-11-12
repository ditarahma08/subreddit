import Image from "next/image";
import LogoReddit from "public/reddit.svg";

export default function Comment() {
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
          <span className="text-xs font-bold">u/Sesmo_FPV</span>
          <span className="mx-2">&middot;</span>
          <span className="text-xs">5 days ago</span>
        </div>

        <div className="text-xs mt-2">
          <p>
            Reminds me of all those times I fell on the spikes in the prince of
            persia game 20 years ago
          </p>
        </div>

        <div className="mt-2 flex gap-x-2">
          <button className="bg-slate-300 rounded-3xl text-xs py-2 px-3">
            987
          </button>
          <button className="bg-slate-300 rounded-3xl text-xs py-2 px-3">
            78
          </button>
          <button className="bg-slate-300 rounded-3xl text-xs py-2 px-3">
            Reply
          </button>
          <button className="bg-slate-300 rounded-3xl text-xs py-2 px-3">
            Share
          </button>
        </div>

        <a className="text-xs mt-3 cursor-pointer">2 more reply</a>
      </div>
    </div>
  );
}
