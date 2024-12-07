import React, { useState } from "react";

interface FeedbackModalProps {
  ideaTitle: string;
  onClose: () => void;
  onSubmit: (feedback: string) => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ ideaTitle, onClose, onSubmit }) => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (feedback.trim()) {
      onSubmit(feedback);
      setFeedback(""); // Clear the input after submission
      onClose(); // Close the modal after submission
    } else {
      alert("Please enter feedback."); // Alert for empty feedback
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-lg font-bold mb-4">Leave Feedback for: {ideaTitle}</h2>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="border border-gray-300 rounded w-full h-24 mb-4 p-2"
          placeholder="Your feedback..."
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
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
