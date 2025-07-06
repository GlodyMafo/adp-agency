import React from "react";
import Navbar from "./Nav";


const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-dot-pattern from-zinc-900 pt-[50px] via-black to-black text-white font-sans px-[168px]">
        <Navbar />
        <main className="text-center mt-20 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#e98706] mb-4 mt-[120px]">
            Libérez le potentiel de votre entreprise.
          </h1>
          <h2 className="text-3xl md:text-4xl text-white mb-14">Automatisez vos processus, gagnez du temps et boostez votre productivité dès aujourd'hui.</h2>

    <div className="flex justify-center items-center ">
  <div className="flex justify-between w-[35%] gap-4 z-40">
   <button
  className="bg-neutral-900 text-white px-6 py-3 rounded-[50px] font-medium 
             hover:bg-[#e98706] transition-all duration-600
             shadow-md hover:shadow-lg transform cursor-pointer"
>
  Get Started
</button>

    <button className="bg-neutral-900 text-white px-6 py-3 rounded-[50px] font-medium
     hover:bg-[#e98706] transition-all duration-600
             shadow-md hover:shadow-lg transform cursor-pointer">
      Book a call
    </button>
  </div>
</div>

        </main>
      </div>
      <div className="bg-black h-screen">

      </div>
    </>
  );
};

export default Home;
