import { auth } from "../../config/firebase";
import { signOut ,onAuthStateChanged} from "firebase/auth";
import { FaSignOutAlt, FaUser, FaEnvelope, FaUtensils } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

   useEffect(() => {
  
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setCheckingAuth(false);
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
   try {
      await signOut(auth);
      setUser(null);
      // Optionally navigate or refresh
      window.location.reload();
    } catch (err) {
      console.error("Logout Error", err);
    }
  };
   if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-2xl text-gray-700">Checking authentication...</p>
      </div>
    );
  }
  if (!user) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <FaUser className="mx-auto text-4xl text-gray-400 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">No User Logged In</h2>
        <p className="text-gray-600 mb-6">Please sign in to access your recipe profile</p>
        <a href="/login" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-medium transition duration-300 inline-block">
          Go to Login
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 text-white">
            <div className="flex items-center space-x-6">
              <img
                src={user.photoURL || "/KL.png"}
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-white shadow-md"
              />
              <div>
                <h1 className="text-3xl font-bold">{user.displayName || "Krafty Chef"}</h1>
                <p className="flex items-center mt-1">
                  <FaEnvelope className="mr-2" /> {user.email}
                </p>
                {/**<div className="flex items-center mt-3 bg-amber-700 bg-opacity-30 px-3 py-1 rounded-full w-max">
                  <FaUtensils className="mr-2" />
                  <span>Premium Member</span>
                </div> */}
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Stats */}
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-3">My Recipe Stats</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-500">Recipes Posted</p>
                    <p className="text-2xl font-bold text-amber-600">24</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Recipes Saved</p>
                    <p className="text-2xl font-bold text-amber-600">56</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Following</p>
                    <p className="text-2xl font-bold text-amber-600">128</p>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="md:col-span-2">
                <h3 className="font-semibold text-gray-700 mb-3">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-3">
                      <FaUtensils className="text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium">Added a new recipe</p>
                      <p className="text-sm text-gray-500">Spicy Thai Basil Chicken- 2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-3">
                      <FaUtensils className="text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium">Saved a recipe</p>
                      <p className="text-sm text-gray-500">
                      Vegan Chocolate Cake - 5 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap gap-4 justify-between">
              <button className="bg-white border border-amber-500 text-amber-600 hover:bg-amber-50 px-6 py-2 rounded-full font-medium transition duration-300 flex items-center">
                Edit Profile
              </button>
              <button
                onClick={handleLogout}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full font-medium transition duration-300 flex items-center"
              >
                <FaSignOutAlt className="mr-2" /> Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}