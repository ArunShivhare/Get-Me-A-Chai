import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center gap-4 items-center min-h-[40vh]">
        <div className="font-bold text-5xl flex gap-3 ">
          <h1>Get Me A Chai</h1>
          <span><img src="/tea.gif" width={50} alt="" /></span>
        </div>
        <p>
          A crowdfounding plateform for creator to raise money by you follower, Start Now
        </p>
        <div className="flex gap-3">
          <button type="button" className="text-white cursor-pointer bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5">Start Now</button>
          <button type="button" className="text-white cursor-pointer bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5">Read More</button>
        </div>
      </div>

      <div className="bg-slate-400 h-1 opacity-10"></div>

      <div className="container mx-auto my-15">
        <h2 className="text-3xl font-bold text-center my-10">Your fans can buy you a chai</h2>
        <div className="flex gap-3 justify-around">
          <div className="item space-y-3 mx-5 justify-center items-center flex flex-col">
            <img className="rounded-full bg-slate-200 p-2" src="/man.gif" width={80} alt="" />
            <p className="font-bold text-xl">Found Yourself</p>
            <p className="text-center">Your fans are available to help you</p>
          </div>
          <div className="item space-y-3 mx-5 justify-center items-center flex flex-col">
            <img className="rounded-full bg-slate-200 p-2" src="/coin.gif" width={80} alt="" />
            <p className="font-bold text-xl">Found Yourself</p>
            <p className="text-center">Your fans are available to help you</p>
          </div>
          <div className="item space-y-3 mx-5 justify-center items-center flex flex-col">
            <img className="rounded-full bg-slate-200 p-2" src="/group.gif" width={80} alt="" />
            <p className="font-bold text-xl">Fans want to help</p>
            <p className="text-center">Your fans are available to help you</p>
          </div>
        </div>
        </div>

        <div className="bg-slate-400 h-1 opacity-10"></div>

        <div className="container mx-auto my-15 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center my-10">Learn more about us</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/QtaorVNAwbI?si=jLOqMHlXlJ1K8HjW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        
    </>
  );
}
