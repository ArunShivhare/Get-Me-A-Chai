import React from "react";
import Link from "next/link";  

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50 px-4 py-20">
            <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">

                {/* Header */}
                <div className="font-bold text-3xl my-5 items-center justify-center gap-3 flex">
                    <h1>Get Me A Chai</h1>
                    <span><img src="/tea.gif" width={50} alt="" /></span>
                </div>
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                    Get Me A Chai is a creator-friendly crowdfunding platform where fans
                    directly support creators by buying them a chai. Simple, personal,
                    and powerful.
                </p>

                {/* How it works */}
                <section className="mb-14">
                    <h2 className="text-2xl font-semibold mb-6 text-center">
                        How It Works
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex items-start gap-4 bg-gray-50 rounded-2xl p-6">
                            <img
                                src="/group.gif"
                                alt="Fans collaborate"
                                className="w-16 h-16 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg font-semibold mb-1">
                                    Fans Want to Collaborate
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Your fans are excited to support and collaborate with you on
                                    your creative journey.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 bg-gray-50 rounded-2xl p-6">
                            <img
                                src="/coin.gif"
                                alt="Support through chai"
                                className="w-16 h-16 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg font-semibold mb-1">
                                    Support Through Chai
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Fans contribute directly by buying you a chai, funding your
                                    ideas with love.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits grid */}
                <section className="grid md:grid-cols-2 gap-10">

                    {/* Creators */}
                    <div className="bg-linear-to-br from-purple-50 to-blue-50 rounded-2xl p-6">
                        <h2 className="text-xl font-semibold mb-4">
                            Benefits for Creators 🎨
                        </h2>
                        <ul className="space-y-3 text-gray-700 text-sm">
                            <li>• Direct financial support from fans</li>
                            <li>• Stronger personal connection</li>
                            <li>• Creator-focused tools & features</li>
                            <li>• Exposure to a growing community</li>
                        </ul>
                    </div>

                    {/* Fans */}
                    <div className="bg-linear-to-br from-yellow-50 to-orange-50 rounded-2xl p-6">
                        <h2 className="text-xl font-semibold mb-4">
                            Benefits for Fans ❤️
                        </h2>
                        <ul className="space-y-3 text-gray-700 text-sm">
                            <li>• Support creators you love</li>
                            <li>• Be part of the creative journey</li>
                            <li>• Exclusive perks & recognition</li>
                            <li>• Direct creator interaction</li>
                        </ul>
                    </div>
                </section>

                {/* Extra sections */}
                <section className="mt-14 space-y-10">

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">
                            Collaboration & Growth 🚀
                        </h2>
                        <p className="text-gray-600">
                            Connect with fellow creators, collaborate on projects, expand your
                            reach, and unlock new creative opportunities together.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">
                            Community & Support 🌍
                        </h2>
                        <p className="text-gray-600">
                            Join a positive, inclusive community where creativity is valued
                            and everyone grows together.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">
                            Resources & Exposure 📚
                        </h2>
                        <p className="text-gray-600">
                            Access tools, guidance, and exposure to showcase your work to a
                            global audience.
                        </p>
                    </div>
                </section>

                {/* Footer CTA */}
                <div className="mt-16 text-center">
                    <p className="text-gray-700 mb-4">
                        Ready to turn your passion into something bigger?
                    </p>
                    <Link href="/login">
                        <div className="cursor-pointer inline-block bg-linear-to-br from-purple-600 to-blue-500 text-white px-8 py-3 rounded-full font-medium">
                            Start Your Journey 
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default About;

export const metadata = {
    title: "About - Chai & Fund",
};
