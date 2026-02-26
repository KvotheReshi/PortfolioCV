import { useState } from "react";
import IconRightArrow from "./IconRightArrow";
import IconLeftArrow from "./IconLeftArrow";

interface Props{
  slides: Array<{ id: string; image: string }>;
  saveId: (id: string) => void;
}

export default function Carousel({ slides, saveId }: Props) {

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const previousSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(slides.length - 1);
      saveId(slides[slides.length - 1].id);
    }
    else {
      setCurrentSlide(currentSlide - 1);
      saveId(slides[currentSlide - 1].id);
    }
  };

  const nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0);
      saveId(slides[0].id);
    }
    else {
      setCurrentSlide(currentSlide + 1);
      saveId(slides[currentSlide + 1].id);
    }
  };

  return (
    <div className="overflow-hidden relative w-full h-full">
      <div className="flex transition ease-out duration-400 h-full w-full"
      style={{ transform: `translateX(-${currentSlide * 100}%)` }}>

        {slides.map((s: { id: string; image: string }) => {
          return <img key={s.id} src={s.image}/>;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10">
        <button onClick={previousSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center cursor-pointer
             rounded-full bg-black text-white
             ring-1 ring-white/40
             hover:bg-zinc-900 hover:ring-white/40
             active:scale-95
             focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          aria-label="Previous slide"
          type="button"
        >
          <IconLeftArrow />
        </button>
        <button onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center cursor-pointer
             rounded-full bg-black text-white
             ring-1 ring-white/40
             hover:bg-zinc-900 hover:ring-white/40
             active:scale-95
             focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          aria-label="Next slide"
          type="button"
        >
          <IconRightArrow />
        </button>
      </div>

        <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
          {slides.map((_, i) => {
            return (
            <div
              onClick={() => {
                setCurrentSlide(i);
                saveId(slides[i].id);
              }}
              key={"circle" + i}
             className={`rounded-full w-5 h-5 cursor-pointer ${i==currentSlide ? "bg-white" : "bg-gray-500"}`}
             ></div>
          );})}
        </div>

    </div>
  );
}
