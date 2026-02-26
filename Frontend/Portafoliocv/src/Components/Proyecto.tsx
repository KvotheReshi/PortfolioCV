import CardData from './Data';
interface Props{
  id: string;
}

 function ProjectSelector( props: Props) {
  return Object.values(CardData).map((card: { id: string; title: string; description: string; link: string }) => {
    if (card.id !== props.id) return null;
    return (
      <div key={card.id}>
        <h2 className='text-2xl font-bold text-white font-serif'>{card.title}</h2>
        <p className="text-white text-xl font-serif">{card.description}</p>
        <a 
        href={card.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline font-serif">View Project</a>
      </div>
    )
  })
}

export default ProjectSelector;

