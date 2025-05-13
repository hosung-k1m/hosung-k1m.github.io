import React from 'react';

const produceSpans = (text, animation) => {
  return text.split("").map((letter, index) => (
    <span
      key={index}
      className={`inline-block transform-style-3d origin-bottom ${animation}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));
};

const Position = () => {
  return (
    <div className="relative cursor-default font-medium text-white text-xs xs:text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-tight w-full">
      <div className="absolute inset-0 top-[-3px] xs:top-[-9px] sm:top-[-10px] md:top-[-15px] lg:top-[-17px] flex flex-col">
        <div className="text first absolute left-1 md:left-2 lg:left-[-4px] 2xl:left-9 flex" aria-label="Builder">
          {produceSpans("Builder", "animate-textRotate1")}
        </div>
        <div className="text second absolute left-1 md:left-2 lg:left-[-4px] 2xl:left-9 flex" aria-label="Explorer">
          {produceSpans("Explorer", "animate-textRotate2")}
        </div>
      </div>
    </div>
  );
};

export default Position;
