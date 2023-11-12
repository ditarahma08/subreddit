import Image from "next/image";
import LogoReddit from "public/reddit.svg";

export default function Card() {
  return (
    <div className="border-b-2 pb-3 cursor-pointer">
      <div className="flex items-center">
        <div className="flex items-center">
          <Image
            src={LogoReddit}
            height={32}
            width={32}
            alt="img-profile"
            className="object-cover rounded-full mr-2"
          />
          <span className="text-xs font-bold">u/Sesmo_FPV</span>
        </div>

        <span className="mx-2">&middot;</span>

        <span className="text-xs">5 days ago</span>
      </div>

      <div>
        <p className="font-bold text-lg">
          HMB while I perform this crazy chick pickup move
        </p>

        <div className="bg-slate-700 rounded-lg flex justify-center">
          <img
            src="https://marketplace.canva.com/EAFGvk4lBcw/1/0/1600w/canva-brown-funny-meme-square-yPQiiYDM3S8.jpg"
            width="auto"
            className="max-h-96"
          />
        </div>
      </div>

      <div className="mt-2 flex gap-x-2">
        <button className="bg-slate-300 rounded-3xl text-xs py-2 px-3">
          987
        </button>
        <button className="bg-slate-300 rounded-3xl text-xs py-2 px-3">
          78
        </button>
      </div>
    </div>
  );
}
