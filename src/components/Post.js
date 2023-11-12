import Image from "next/image";
import LogoReddit from "public/reddit.svg";
import Statistic from "./Statistic";

export default function Post() {
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

            <span>5 days ago</span>
          </div>
          <span className="font-bold">u/Sesmo_FPV</span>
        </div>
      </div>

      <h1 className="font-bold text-4xl my-2">HMB while I try parkour</h1>

      <div className="bg-slate-700 rounded-lg flex justify-center mt-4">
        <img
          src="https://marketplace.canva.com/EAFGvk4lBcw/1/0/1600w/canva-brown-funny-meme-square-yPQiiYDM3S8.jpg"
          width="auto"
          className="max-h-96"
        />
      </div>

      <p className="text-sm mt-4">
        The stockbreeding bases across the country direct primary efforts to
        increasing the number of dairy cattle and goats, true to the Workers'
        Party of Korea's policy of supplying milk products and other nutritive
        foodstuffs to all the children. Officials of the Agricultural Commission
        and relevant units are taking positive measures to build up the
        stockbreeding bases and increase the output of livestock products. The
        Kubin Stockbreeding Farm under the Pyongyang Municipality Rural Economy
        Committee has raised the weight ratio of milking cows and goats by using
        various feed additives. North Hamgyong Province has increased the number
        of goats by relying on the existing stockbreeding foundation. The
        Chongjin City Goat Farm introduced an artificial insemination method to
        spread goats of good breed. South Hamgyong Province has directed efforts
        to increasing the technical skills of breeders and exchanging experience
        of advanced units. The Hungsang Dairy Cattle Farm increased the number
        of cows and the milk production while creating favorable conditions for
        breeding and caring. North Phyongan, North Hwanghae and other provinces
        and regions have taken thorough measures for veterinary and
        anti-epizootic work to further consolidate the foundation of
        stockbreeding.
      </p>

      <Statistic />
    </div>
  );
}
