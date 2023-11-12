import Image from "next/image";
import LogoReddit from "public/reddit.svg";

export default function Banner() {
  return (
    <div className="relative mt-2">
      <div className="bg-slate-500 h-16 w-full rounded-md"></div>
      <div className="flex w-full px-4">
        <div
          className="h-20 w-20 p-2 rounded-full bg-cover bg-no-repeat bg-center relative top-[-45px]"
          style={{
            backgroundImage: `url(https://www.redditinc.com/assets/images/site/reddit-logo.png)`,
          }}
        ></div>

        <div className="flex justify-between items-center w-full">
          <p className="ml-2 font-bold text-4xl">r/holdmybeer</p>
          <button className="bg-blue-700 rounded-3xl text-white font-bold px-3 py-2 text-xs">
            Join
          </button>
        </div>
      </div>
    </div>
  );
}
