// src/components/SideInfo.tsx
import React from "react";

interface SideInfoProps {
  companyName: string;
  currentUser: string;
  companyDescription: string;
  currentFeedback: string;
  onPostIdea: () => void;
}

const SideInfo: React.FC<SideInfoProps> = ({
  companyName,
  currentUser,
  companyDescription,
  currentFeedback,
  onPostIdea,
}) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-bold">{companyName}</h2>
      <p className="text-sm text-gray-600">Current User: {currentUser}</p>
      <p className="mt-2">{companyDescription}</p>
      <h3 className="mt-4 font-semibold">Current Feedback:</h3>
      <p className="text-gray-600">{currentFeedback}</p>
      <button
        onClick={onPostIdea}
        className="mt-4 bg-magenta-600 text-white py-2 px-4 rounded hover:bg-magenta-700"
      >
        Post Idea
      </button>
    </div>
  );
};

export default SideInfo;
