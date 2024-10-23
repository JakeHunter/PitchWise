// src/components/PostIdeaModal.tsx
import React, { useState } from "react";

interface PostIdeaModalProps {
  onClose: () => void;
  onSubmit: (idea: string) => void;
}

const PostIdeaModal: React.FC<PostIdeaModalProps> = ({ onClose, onSubmit }) => {
  const [idea, setIdea] = useState("");

  const handleSubmit = () => {
    if (idea) {
      onSubmit(idea);
      setIdea(""); // Clear the input after submission
      onClose(); // Close the modal after submission
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-lg font-bold mb-4">Post a New Idea</h2>
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          className="border border-gray-300 rounded w-full h-24 mb-4 p-2"
          placeholder="Describe your idea..."
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
