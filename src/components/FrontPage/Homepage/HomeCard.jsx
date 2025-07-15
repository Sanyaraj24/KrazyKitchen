import { useNavigate } from "react-router-dom";

export default function HomeCard({ myrecipe }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/details/${myrecipe?.recipe?.uri.split('_')[1]}`);
  };

  return (
    <div 
      className="rounded-lg shadow-lg bg-white p-3 w-full h-full flex flex-col cursor-pointer hover:shadow-xl transition-shadow duration-300"
      onClick={handleClick}
    >
      <div className="w-full aspect-square overflow-hidden rounded-t-lg">
        <img
          className="h-full w-full object-cover"
          src={myrecipe?.recipe?.image}
          alt={myrecipe?.recipe?.label}
        />
      </div>
      <div className="mt-3 space-y-1 flex-grow">
        <h2 className="font-bold font-serif text-base sm:text-lg line-clamp-2">
          {myrecipe?.recipe?.label}
        </h2>
        <div className="mt-2 space-y-1">
          <p className="font-serif font-light text-gray-600 text-xs sm:text-sm line-clamp-1">
            CuisineType: <span className="ml-1 font-normal">{myrecipe?.recipe?.cuisineType?.join(", ")}</span>
          </p>
          <p className="font-serif font-light text-gray-600 text-xs sm:text-sm line-clamp-1">
            MealType: <span className="ml-1 font-normal">{myrecipe?.recipe?.mealType}</span>
          </p>
        </div>
      </div>
    </div>
  );
}