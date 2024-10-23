// src/components/Modal.tsx
import React, { useState } from "react";
import { Item } from "../types";

interface ModalProps {
  item: Item;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ item, onClose }) => {
  const [thumbsUp, setThumbsUp] = useState(false);
  const [thumbsDown, setThumbsDown] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleThumbsUp = () => {
    setThumbsUp(true);
    setThumbsDown(false); // Reset thumbs down if thumbs up is clicked
  };

  const handleThumbsDown = () => {
    setThumbsDown(true);
    setThumbsUp(false); // Reset thumbs up if thumbs down is clicked
  };

  const handleFeedbackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value);
  };

  const handleLeaveFeedback = () => {
    // Logic for handling feedback submission can go here
    console.log("Feedback submitted:", feedback);

    // Clear the feedback text area
    setFeedback("");

    // Optionally reset thumbs up and down
    setThumbsUp(false);
    setThumbsDown(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/3">
        <h2 className="text-xl font-bold mb-4">{item.title}</h2>
        <p className="mb-4">{item.description}</p>
        <img
          src={item.logo}
          alt={`${item.title} logo`}
          className="w-20 h-20 mb-4"
        />

        {/* Feedback Text Area */}
        <textarea
          className="w-full border rounded p-2 mb-4"
          placeholder="Leave your feedback here..."
          value={feedback}
          onChange={handleFeedbackChange}
          rows={3}
        />

        <div className="flex justify-between mb-4">
          <button
            className="bg-magenta-600 text-white py-2 px-4 rounded hover:bg-magenta-700"
            onClick={handleLeaveFeedback}
          >
            Leave Feedback
          </button>
          <div className="flex items-center space-x-2">
            <button
              className={`flex items-center justify-center p-2 rounded-full ${
                thumbsUp ? "bg-magenta-300" : "bg-gray-300"
              } hover:bg-magenta-200`}
              onClick={handleThumbsUp}
            >
              👍
            </button>
            <button
              className={`flex items-center justify-center p-2 rounded-full ${
                thumbsDown ? "bg-magenta-300" : "bg-gray-300"
              } hover:bg-magenta-200`}
              onClick={handleThumbsDown}
            >
              👎
            </button>
          </div>
          <button
            className="bg-gray-300 py-2 px-4 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
