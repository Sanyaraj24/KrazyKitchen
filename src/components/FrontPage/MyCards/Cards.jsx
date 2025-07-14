import { useNavigate } from 'react-router-dom';

export default function Cards({ item }) {
  const navigate = useNavigate();

  const handleClick = () => {
    const id = item.recipe?.uri?.split('_')[1];
    if (id) navigate(`/details/${id}`);
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl w-full max-w-[300px] md:max-w-[345px] h-auto p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300">
      <img
        src={
          item.recipe?.images?.REGULAR?.url ||
          item.recipe?.images?.LARGE?.url ||
          item.recipe?.images?.SMALL?.url ||
          item.recipe?.image || '/fallback.jpg'
        }
        alt={item.recipe?.label}
        onError={(e) => e.currentTarget.src = '/fallback.jpg'}
        className="w-full h-52 md:h-60 object-cover rounded-xl"
      />
      <div className="py-4 flex flex-col gap-2">
        <h3 className="text-lg md:text-xl font-semibold truncate">{item.recipe?.label}</h3>
        <p className="text-sm md:text-base text-gray-700">
          <span className="italic">Cuisine Type: {item.recipe?.cuisineType?.join(', ')}</span>
        </p>
      </div>
      <button
        className="bg-[#90cdcd] hover:bg-[#a6eded] text-white font-bold rounded-lg py-2 px-4 w-full text-center text-sm md:text-base transition-colors duration-300"
        onClick={handleClick}
      >
        Let&apos;s Cook
      </button>
    </div>
  );
}
