import React from "react";
import Header from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

function Coach() {
  return (
    <div className="flex flex-col justify-between items-center w-full min-h-screen">
      <Header></Header>
      <div className="flex flex-col justify-center items-center pt-24 pb-24 w-full flex-1">
        <div className="flex flex-col justify-center items-center backdrop-blur-sm p-10 rounded-xl md:w-[30rem] h-[25rem] bg-[rgba(40,40,40,0.70)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] border border-[rgba(255,255,255,0.10)]">
          <h1 className="text-2xl font-semibold font-poppins text-center uppercase">
            Work in progress
          </h1>
          <h1 className="text-base italic text-accent-foreground font-base text-center mt-2">
            Coach functionality is coming soon...
          </h1>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Coach;
