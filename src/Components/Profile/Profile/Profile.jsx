import { useState, useContext } from "react";
import { FcBusinessman } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { imageUpload } from "../../Hooks/imageHooks";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [profileImage, setProfileImage] = useState(user?.photoURL || "");
  const [previewImage, setPreviewImage] = useState(""); 
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file); 
      setPreviewImage(objectUrl); 
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.files[0];

    if (photo) {
      const imageData = await imageUpload(photo);
      const imageUrl = imageData?.data?.display_url || "";

      setProfileImage(imageUrl);
      handleUpdateUser(name, imageUrl);
    } else {
      handleUpdateUser(name, profileImage);
    }
  };

  const handleUpdateUser = (name, photo) => {
    const profile = {
      displayName: name,
      photoURL: photo,
    };

    updateUserProfile(profile)
      .then(() => {
        toast.success("Successfully Updated Profile");
        navigate('/profile');
      })
      .catch((error) => {
        console.error("Update profile error:", error);
        toast.error("Failed to update profile");
      });
  };

  return (
    <div className="min-h-screen">
      <div className="w-10/12 border border-cyan-300 rounded-lg mx-auto grid grid-cols-1 gap-20 lg:gap-2 lg:grid-cols-2 my-10 p-10">
        <div className="w-full">
          {previewImage || profileImage ? (
            <img
              className="w-96 lg:h-96 rounded-full"
              src={previewImage || profileImage}
              alt="Profile"
            />
          ) : (
            <FcBusinessman style={{ fontSize: "200px" }} />
          )}
        </div>

        <div>
          <form onSubmit={handleUpdate}>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                defaultValue={user?.email}
                readOnly
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input
                type="file"
                accept="image/*"
                name="photo"
                className="file-input file-input-ghost w-full border-4"
                onChange={handleImageChange} 
              />
            </div>

          
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                defaultValue={user?.displayName}
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>

            <button
              type="submit"
              className="w-full btn bg-white text-black  shadow-2xl py-2 rounded-lg"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
