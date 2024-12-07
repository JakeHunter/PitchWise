import React, { useState } from "react";

interface PostIdeaModalProps {
  onClose: () => void;
  onSubmit: (idea: { title: string; description: string; image: string }) => void; // Updated to include title and image
}

const PostIdeaModal: React.FC<PostIdeaModalProps> = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null); // State for the image

  const handleSubmit = () => {
    if (title.trim() && description.trim() && image) { // Check for non-empty fields and an image
      const imageUrl = URL.createObjectURL(image); // Create a URL for the uploaded image
      onSubmit({ title, description, image: imageUrl }); // Pass title, description, and image URL
      setTitle(""); // Clear the input after submission
      setDescription("");
      setImage(null); // Clear the image after submission
      onClose(); // Close the modal after submission
    } else {
      alert("Please fill out all fields and upload an image."); // Alert for incomplete submission
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null; // Get the selected file
    setImage(file); // Set the image state
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-lg font-bold mb-4">Post a New Idea</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded w-full mb-4 p-2"
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded w-full h-24 mb-4 p-2"
          placeholder="Describe your idea..."
        />
        <input
          type="file"
          onChange={handleImageChange}
          className="mb-4"
          accept="image/*" // Only allow image files
        />
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-magenta-600 text-white py-2 px-4 rounded hover:bg-magenta-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostIdeaModal;
