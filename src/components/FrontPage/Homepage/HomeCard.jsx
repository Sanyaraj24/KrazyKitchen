import { useNavigate } from "react-router-dom";

export default function HomeCard({myrecipe}) {
  const navigate=useNavigate();
  const handleClick = () => {
    navigate(`/details/${myrecipe?.recipe?.uri.split('_')[1]}`);
  };
   
  return(
    <>
  
    <div className="rounded-lg shadow-lg bg-white p-2 w-96 h-auto">
      <div className=" w-56">
        <img
          className="h-56 w-full object-cover rounded-t-lg"
          src={myrecipe?.recipe?.image}
          alt={myrecipe?.recipe?.label}
          onClick={handleClick}
        />
      </div>
      <div className="mt-2 space-y-1">
        <h2 className="font-bold font-serif text-lg line-clamp-2">
          {myrecipe?.recipe?.label}
        </h2>
        <p className=" font-serif font-extralight text-gray-600 text-sm line-clamp-1 ">
        CuisineType: <span className="ml-2"></span>{myrecipe?.recipe?.cuisineType?.join(", ")}
        </p>
        <p className="font-serif font-extralight text-gray-600 text-sm line-clamp-1 ">
          MealType:<span className="ml-2">{myrecipe?.recipe?.mealType}</span>
        </p>
      </div>
    </div>

    </>
  )
  
  
}