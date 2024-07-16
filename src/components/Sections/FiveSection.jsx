import React from "react";
import data from "../../data.json";

function FiveSection() {
  const words = data.sections.seven.title.split(" ");

  return (
    <div className="relative">
      <div className="grid sm:grid-cols-2 gap-2 mt-20">
        <div className="flex flex-col justify-center items-start text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
          <h2 style={{ lineHeight: "1.2" }}>
            {words.map((word, index) => (
              <span
                key={index}
                style={{
                  color: word === "expertise" ? "#080808" : "inherit",
                }}
              >
                {word}{" "}
              </span>
            ))}
          </h2>
          <p className="text-black text-xs mt-7">
            {data.sections.nine.subtitule}
          </p>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10 text-xs">
              Conoce más
            </button>
          </div>
          <h2 className="text-[#080808] sm:mb-60"></h2>
          <img
            src={data.sections.nine.image3}
            alt={data.sections.nine.alt1}
            width="100%"
            height="auto"
            className="block sm:hidden"
          />
        </div>
        <div className="hidden sm:block">
          <img src={data.sections.nine.image3} alt={data.sections.nine.alt1} />
        </div>
      </div>
    </div>
    // <div id="pricing" className="relative ">
    //   <div className="grid sm:grid-cols-2 gap-2 mt-20">
    //     <div className="text-center">
    //       <h2 style={{ lineHeight: "1.2" }}>
    //         {words.map((word, index) => (
    //           <span
    //             key={index}
    //             style={{
    //               color: word === "expertise" ? "#080808" : "inherit",
    //             }}
    //           >
    //             {word}{" "}
    //           </span>
    //         ))}
    //       </h2>
    //       <p className="text-black text-xs mt-7">{data.sections.seven.subtitule}</p>
    //       <p className="text-black text-xs mt-7">{data.sections.seven.subtitule1}</p>
    //       <p className="text-black text-xs mt-7">{data.sections.seven.subtitule2}</p>
    //       <div>
    //      </div>
    //       <h2 className="text-[#080808] sm:mb-60"></h2>
    //       <img
    //         src={data.sections.seven.image1}
    //         alt={data.sections.seven.alt1}
    //         width="100%"
    //         height="auto"
    //         className="block sm:hidden"
    //       />
    //     </div>
    //     <div className="hidden sm:block">
    //       <img src={data.sections.seven.image1} alt={data.sections.seven.alt1} />
    //     </div>
    //   </div>
    // </div>
  );
}

export default FiveSection;
