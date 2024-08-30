import { useEffect, useState } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";
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
        console.log(err);
      }
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <article>
        <div
          className="container mx-auto px-4 tracking-wider py-5 shadow-2xl rounded-l h-max p-15 "
          style={{ backgroundColor: "#F8F6F4" }}
        >
          <div className="heading flex space-x-10 py-3">
            <div className="flex w-1/2 h-2/4 overflow-hidden  ">
              <img
                className="image w-[70%] h-[70%] p-10 px-5 rounded-md"
                src={recipe?.image}
                alt="Recipe"
              />
            </div>
            <div className="flex-initial w-1/2">
              <h2 className="mb-2 mt-2 text-4xl font-bold leading-tight text-black font-serif ">
                {recipe?.label}
              </h2>
              <div className="icon  flex space-x-8 py-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-save flex-col hover:scale-110"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1z" />
                </svg>
                <div className="favourite flex-col">
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
              </div>
              <div className="badges" style={{ overflow: "auto" }}>
                {recipe?.healthLabels.map((label, index) => (
                  <span
                    key={index}
                    className=" text-black  text-xs font-medium me-2 px-3 py-1 my-1 rounded-full bg-[#D2E9E9] "
                    style={{ marginRight: "8px", display: "inline-block" }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="details flex space x-8 gap-5  ">
            <div className="ingredients flex-none w-1/2 h-4/5">
              {/*INGREDIENTS */}
              <div className="container-ingredient font-medium font-serif text-gray-900 whitespace-nowrap bg-[#E3F4F4] rounded-md ml-10 py-3">
                <h1 className="text-2xl md:text-3xl pl-2 my-2 border-l-4 ml-3 mb-3  font-serif font-bold border-blue-400  text-black">
                  Ingredients
                </h1>
                <ul>
                  {recipe?.ingredients.map((ingredient, index) => (
                    <li
                      key={index}
                      style={{ listStyleType: "disc", marginBottom: "5px"}}
                    >
                      {ingredient?.text}
                    </li>
                  ))}
                </ul>
              </div>
              
                
              <div className="flex-row container-note border-solid font-serif ml-7"  >
                <h2 className="flex flex-row flex-nowrap items-center mt-24">
                  <span className="flex-grow block border-t border-black"></span>
                  <span className="flex-none block mx-4 px-4 py-3 mt-3 text-xl rounded leading-none font-medium font-serif  bg-black text-white">
                    NOTE
                  </span>
                  <span className="flex-grow block border-t border-black"></span>
                </h2>
                <div className="flex  gap-4">
                <p className="font-bold">Servings:</p>
                <div className="flex-col ml-6">
                  <p>{recipe.yield}</p></div>
                </div>
                <div className="flex  gap-6">
                <p className="font-bold">Dish Type:</p>
                <div className="flex-col ml-2">
                  <p>{recipe.dishType}</p></div>
                </div>
                <div className="flex gap-2">
                <p className="font-bold">Cuisine Type:</p>
                <div className="flex-col">
                  <p>{recipe.cuisineType}</p></div>
                </div>
                <div className="flex gap-3">
                <p className="font-bold">Search for recipe:</p>
                <div className="flex-col">
                <a href={recipe.url} target="_blank" rel="noopener noreferrer" className="url ml-1">{recipe.url}</a></div>
                </div>
                
              </div>
             
            </div>
            <div className="nutrients flex-initial w-1/2 h-max mt-18 ml-4 py-2 ">
              <h1 className="text-2xl md:text-3xl pl-2 my-2 border-l-4 ml-3 mb-3  font-serif font-bold  ">
                Nutrients
              </h1>
              {/* Display nutrients here */}
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg overflow-y-scroll h-[600px]">
                <table className="w-full text-sm text-left rtl:text-right ">
                  <thead className="text-md font-medium font-serif font-semiboldtext-gray-900 whitespace-nowrap bg-[#D2E9E9]">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3  "
                      >
                        Label
                      </th>
                      <th
                        scope="col font-medium  whitespace-nowrap "
                        className="px-6 py-3"
                      >
                        Value
                      </th>
                    </tr>
                  </thead>
                  {/*Object.keys(obj)---to extract keys of obj*/}
                  {Object.keys(recipe?.totalNutrients).map((key, index) => (
                    <tbody key={index}>
                      <tr className="border-b border-gray-200 font-serif bg-[#E3F4F4]">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium  whitespace-nowrap "
                          key={index}
                        >
                          {recipe.totalNutrients[key].label}
                        </th>
                        <td className="px-6 py-4 font-medium whitespace-nowrap  ">
                          {recipe.totalNutrients[key].quantity.toFixed(2)}
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
