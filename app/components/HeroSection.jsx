import React from "react";
import Image from "next/image";
import Link from "next/link";
const HeroSection = () => {
    return (
        <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-centerm text-center sm:text-left">
        <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Harsimran Bhullar</h1>
        <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
        I find great pleasure in engaging in sports, dedicating myself to workouts, and embarking on creative ventures to continually explore new and exhilarating projects.        </p>
        <div>
        <a href="https://www.linkedin.com/in/harsimran-bhullar-174795239/">
        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black">LinkedIn</button></a>
        <a href="https://github.com/harbhulla">
        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-3">GitHub</button></a>
        </div>
        </div>
        </div>
</section>
    );
};

export default HeroSection;