import Imageslider from '../Imageslider';
import Recipe_Category from './Homepage/Recipe_Category';

function Home() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-16 py-8">
      {/* Spacing at the top */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
          <span className="block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-serif">
              Welcome to Flavor Heaven:
            </span>
            Explore a World of Unique Dishes!
          </span>
        </h1>
      </div>

      {/* Image Slider */}
      <div className="mb-12">
        <Imageslider />
      </div>

      {/* Recipe Category */}
      <div>
        <Recipe_Category />
      </div>
    </div>
  );
}

export default Home;
