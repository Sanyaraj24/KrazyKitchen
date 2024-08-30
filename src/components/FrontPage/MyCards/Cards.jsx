import { useNavigate } from 'react-router-dom';

export default function Cards({ item }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${item?.recipe?.uri.split('_')[1]}`);
  };

  return (
    <div className=" bg-white shadow-lg rounded-lg w-[350px] h-[400px] p-2">
      <img
        src={item?.recipe?.image}
        alt={item?.recipe?.label}
        className="w-full h-60 object-cover"
      />
      
        
    
      <div className="p-2 flex flex-col justify-between ">
        <h3 className="text-xl font-semibold truncate">{item?.recipe?.label}</h3>
        <p className=" text-sm text-gray-700">
          <span className="font-cursive">Cuisine Type: {item?.recipe?.cuisineType?.join(', ')}</span>
        </p>
      </div>
      <button
  className="bg-[#90cdcd] hover:to-[#a6eded] text-white font-bold rounded p-2 transition-colors duration-300 text-center px-5 w-full mb-0"
  onClick={handleClick}
>
  Let&apos;s Cook
</button>


      
      



    </div>
  );
}
