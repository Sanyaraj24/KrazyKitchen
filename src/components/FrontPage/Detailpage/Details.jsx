import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const { data } = await axios.get(
          `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=0b63114e&app_key=f50710039ad863a4d9fecc8d4605657e`
        );
        setRecipe(data.recipe);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <article>
        <div
          className="container mx-auto px-4 tracking-wider py-5 shadow-2xl rounded-l h-max p-15"
          style={{ backgroundColor: "#F8F6F4" }}
        >
          <div className="heading flex flex-col md:flex-row space-x-0 md:space-x-10 py-3">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <img
                className="w-3/4 h-auto rounded-md"
                src={recipe?.image}
                alt="Recipe"
              />
            </div>
            <div className="mt-5 md:mt-0 w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-black font-serif">
                {recipe?.label}
              </h2>
              <div className="icon flex space-x-8 py-3 mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-save hover:scale-110"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-emoji-heart-eyes hover:scale-110"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.5 4.5 0 0 1 7.965 13a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242s1.46-.118 2.152-.242a27 27 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434m6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434" />
                </svg>
              </div>
              <div className="badges flex flex-wrap space-x-2 overflow-auto">
                {recipe?.healthLabels.map((label, index) => (
                  <span
                    key={index}
                    className="text-black text-xs font-medium px-3 py-1 my-1 rounded-full bg-[#D2E9E9]"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="details flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 mt-5">
            <div className="ingredients w-full lg:w-1/2">
              <div className="container-ingredient font-medium font-serif text-gray-900 bg-[#E3F4F4] rounded-md py-3">
                <h1 className="text-2xl md:text-3xl pl-2 my-2 border-l-4 ml-3 mb-3 font-serif font-bold border-blue-400 text-black">
                  Ingredients
                </h1>
                <ul>
                  {recipe?.ingredients.map((ingredient, index) => (
                    <li
                      key={index}
                      className="list-disc ml-5 mb-2"
                    >
                      {ingredient?.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="container-note mt-12 font-serif">
                <h2 className="flex items-center">
                  <span className="flex-grow border-t border-black"></span>
                  <span className="mx-4 px-4 py-3 text-xl font-medium bg-black text-white">
                    NOTE
                  </span>
                  <span className="flex-grow border-t border-black"></span>
                </h2>
                <div className="mt-5 space-y-3">
                  <div className="flex">
                    <p className="font-bold">Servings:</p>
                    <p className="ml-4">{recipe.yield}</p>
                  </div>
                  <div className="flex">
                    <p className="font-bold">Dish Type:</p>
                    <p className="ml-4">{recipe.dishType}</p>
                  </div>
                  <div className="flex">
                    <p className="font-bold">Cuisine Type:</p>
                    <p className="ml-4">{recipe.cuisineType}</p>
                  </div>
                  <div className="flex">
                    <p className="font-bold">Search for recipe:</p>
                    <a
                      href={recipe.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 text-blue-500 underline"
                    >
                      {recipe.url}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="nutrients w-full lg:w-1/2">
              <h1 className="text-2xl md:text-3xl pl-2 my-2 border-l-4 ml-3 mb-3 font-serif font-bold">
                Nutrients
              </h1>
              <div className="overflow-x-auto shadow-md sm:rounded-lg overflow-y-scroll h-[600px]">
                <table className="w-full text-sm text-left">
                  <thead className="text-md font-medium font-serif bg-[#D2E9E9]">
                    <tr>
                      <th className="px-6 py-3">Label</th>
                      <th className="px-6 py-3">Value</th>
                    </tr>
                  </thead>
                  {Object.keys(recipe?.totalNutrients).map((key, index) => (
                    <tbody key={index}>
                      <tr className="border-b border-gray-200 font-serif bg-[#E3F4F4]">
                        <th className="px-6 py-4 font-medium">
                          {recipe?.totalNutrients[key]?.label}
                        </th>
                        <td className="px-6 py-4 font-medium">
                          {recipe?.totalNutrients[key]?.quantity.toFixed(2)}
                          {recipe?.totalNutrients[key]?.unit}
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Details;
