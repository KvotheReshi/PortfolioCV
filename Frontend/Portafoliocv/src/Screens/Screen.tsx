import { useState } from 'react'
import "./App.css";
import Description from "./components/Description";
import Carousel from "./components/Carousel";
import ProjectSelector from "./components/Proyecto";
import slide1 from "./assets/Slide1.png";
import slide2 from "./assets/Slide2.png";
import slide3 from "./assets/Slide3.png";
import slide4 from "./assets/Slide4.png";

function App() {

const slides: Array<{ id: string; image: string }> = [
  {
    id: "slideid1",
    image: slide1
  },
  {
    id: "slideid2",
    image: slide2
  },
  {
    id: "slideid3",
    image: slide3
  },
  {
    id: "slideid4",
    image: slide4
  }
];

const [selectedId, setSelectedId] = useState<string>(slides[0].id);

  return (
    <div className="AppContainer min-h-screen w-auto flex flex-col">
      <div className="Higher text-2xl flex max-h-150 min-h-0">
        <div className="flex flex-2 flex-col h-auto">
          <div className="bg-[rgba(121,121,121,0.13)] max-w-400 flex-1 flex flex-col items-center justify-center border-2 
          border-[rgba(255,255,255,0.50)] mr-3 mb-3 rounded-2xl overflow-hidden">
            <Description />   
          </div>
        </div>
        <div className="bg-pink-400 flex flex-4 flex-col items-center">
          <Carousel slides={slides} saveId={(id) => setSelectedId(id)} />    
        </div>
      </div>
      <div className="Lower text-2xl bg-[rgba(121,121,121,0.13)] flex-1 flex items-center justify-center border-2 border-[rgba(255,255,255,0.50)] rounded-2xl pt-3 pb-3">
        <ProjectSelector id={selectedId} />
      </div>
    </div>
  );
}

export default App;
//TODO
//combinar pic con description en un solo componente, y luego ese componente usarlo en el app, 
// asi se ve mas ordenado el codigo, y se puede reutilizar el componente para otros proyectos, 
// ademas de que se ve mas limpio el app.tsx

//Agregar botton para descargar cv con href a pdf.