import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HEAD SECTION */}
      <section className="min-h-[50vh] flex items-center px-6 py-10">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 md:px-30 items-center">

          {/* Left */}
          <div className="space-y-5">
            <div className="flex items-center gap-5 text-4xl md:text-5xl font-bold">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight">
                Chai <span className="text-purple-600">&</span> Fund
              </h1>
              <img src="/tea.gif" width={50} alt="" className="bg-purple-300 rounded-full"/>
            </div>

            <p className="text-gray-600 text-lg">
              A crowdfunding platform for creators.
            </p>

            <p className="text-gray-600 max-w-lg">
              A place where your fans can buy you a chai and support your
              creative journey. Turn appreciation into funding.
            </p>

            <div className="flex gap-4 pt-2">
              <Link href="/login">
                <button className="cursor-pointer px-6 py-2.5 rounded-full text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl shadow-md">
                  Start Now
                </button>
              </Link>

              <Link href="/about">
                <button className="cursor-pointer px-6 py-2.5 rounded-full border border-gray-300 hover:bg-gray-100">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="relative flex justify-center">
            <div className="absolute -z-10 h-44 w-44 rounded-full bg-purple-400/20 blur-3xl"></div>
            <img
              src="/homepage.gif"
              alt="Support creators"
              className="w-[260] md:w-[320]"
            />
          </div>

        </div>
      </section>

      {/* DIVIDER */}
      <div className="h-px bg-gray-200 my-16" />

      {/* FEATURES */}
      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Your fans can support you 💜
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition text-center">
            <img
              src="/man.gif"
              className="mx-auto bg-purple-100 p-3 rounded-full"
              width={80}
              alt=""
            />
            <h3 className="font-semibold text-lg mt-4">
              Fans Want to Help
            </h3>
            <p className="text-gray-500 mt-2">
              Your supporters are always ready to help you grow.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition text-center">
            <img
              src="/coin.gif"
              className="mx-auto bg-blue-100 p-3 rounded-full"
              width={80}
              alt=""
            />
            <h3 className="font-semibold text-lg mt-4">
              Fans Want to Contribute
            </h3>
            <p className="text-gray-500 mt-2">
              Receive financial support directly from your community.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition text-center">
            <img
              src="/group.gif"
              className="mx-auto bg-pink-100 p-3 rounded-full"
              width={80}
              alt=""
            />
            <h3 className="font-semibold text-lg mt-4">
              Fans Want to Collaborate
            </h3>
            <p className="text-gray-500 mt-2">
              Build strong relationships and collaborate with fans.
            </p>
          </div>
        </div>
      </section>


      {/* DIVIDER */}
      <div className="h-px bg-gray-200 my-16" />

      {/* VIDEO */}
      <section className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6 text-center">
          See how it works 🎥
        </h2>

        <video
          controls
          className="rounded-xl shadow-lg w-[280] h-[160] md:w-[560] md:h-[315]"
        >
          <source src="/about.mp4" type="video/mp4" />
        </video>
        <div className="my-10"></div>
      </section>

    </>
  );
}
 