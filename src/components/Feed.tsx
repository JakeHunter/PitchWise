import React, { useState } from "react";
import Card from "./Card";
import Modal from "./Modal";
import { Item } from "../types";
import Navbar from "./Navbar";
import SideInfo from "./SideInfo";
import PostIdeaModal from "./PostIdeaModal";
import FeedbackModal from "./FeedbackModal";

const Feed: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<Item | null>(null);
  const [isPostIdeaModalOpen, setPostIdeaModalOpen] = useState(false);
  const [isFeedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [ideaList, setIdeaList] = useState<
    { title: string; description: string; image: string; feedbacks: string[]; thumbsUpScore: number }[]
  >([]); // Added thumbsUpScore to each idea

  const data: Item[] = [
    // Your existing data here...
  ];

  const handlePostIdeaSubmit = (idea: {
    title: string;
    description: string;
    image: string;
  }) => {
    setIdeaList((prevIdeas) => [
      ...prevIdeas,
      { ...idea, feedbacks: [], thumbsUpScore: 0 }, // Initialize thumbsUpScore to 0
    ]);
  };

  const handleThumbsUp = (index: number) => {
    const updatedIdeas = [...ideaList];
    // Ensure thumbsUpScore is a number and increment it
    updatedIdeas[index].thumbsUpScore = (updatedIdeas[index].thumbsUpScore || 0) + 1;
    setIdeaList(updatedIdeas); // Update state with new thumbs-up score
  };

  const handleFeedbackSubmit = (index: number, feedback: string) => {
    const updatedIdeas = [...ideaList];
    updatedIdeas[index].feedbacks.push(feedback); // Add feedback to the specific idea
    setIdeaList(updatedIdeas);
  };

  return (
    <div>
      <Navbar />
      <div className="p-4 overflow-y-scroll h-screen flex">
        <div className="flex-grow">
          <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg mx-auto">
            {data.map((item, index) => (
              <Card
                key={item.id}
                item={item}
                onClick={() => setSelectedCard(item)}
                className="w-11/12"
              />
            ))}
          </div>
          {selectedCard && (
            <Modal item={selectedCard} onClose={() => setSelectedCard(null)} />
          )}
          {/* Render submitted ideas */}
          <div className="mt-4">
            <h3 className="text-lg font-bold">Ideas Submitted</h3>
            <ul className="list-disc pl-5">
              {ideaList.map((idea, index) => (
                <li key={index} className="mt-1">
                  <strong>{idea.title}</strong>
                  <p>{idea.description}</p>
                  {idea.image && (
                    <img src={idea.image} alt={idea.title} className="w-32 h-32 mt-1" />
                  )}
                  <button
                    onClick={() => setFeedbackModalOpen(true)} // Open feedback modal for this idea
                    className="mt-2 bg-blue-600 text-white py-1 px-2 rounded hover:bg-blue-700"
                  >
                    Leave Feedback
                  </button>

                  {/* Thumbs-up button */}
                  <button
                    onClick={() => handleThumbsUp(index)} // Increment thumbs-up score for this idea
                    className="mt-2 bg-green-600 text-white py-1 px-2 rounded hover:bg-green-700"
                  >
                    👍 {idea.thumbsUpScore}
                  </button>

                  <ul className="mt-1 list-disc pl-5">
                    {idea.feedbacks.map((feedback, feedbackIndex) => (
                      <li key={feedbackIndex}>{feedback}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-1/3 ml-4">
          <SideInfo
            companyName="Pitchwise"
            currentUser="John Doe"
            companyDescription="Pitchwise is a platform for rating startup ideas, giving feedback, and identifying potential problems."
            currentFeedback="Great concept, need more details."
            onPostIdea={() => setPostIdeaModalOpen(true)}
          />
        </div>
      </div>

      {isPostIdeaModalOpen && (
        <PostIdeaModal
          onClose={() => setPostIdeaModalOpen(false)}
          onSubmit={handlePostIdeaSubmit}
        />
      )}

      {isFeedbackModalOpen && (
        <FeedbackModal
          ideaTitle={ideaList[ideaList.length - 1]?.title} // Pass the last idea's title
          onClose={() => setFeedbackModalOpen(false)}
          onSubmit={(feedback) => {
            handleFeedbackSubmit(ideaList.length - 1, feedback);
            setFeedbackModalOpen(false); // Close modal after submitting feedback
          }}
        />
      )}
    </div>
  );
};

export default Feed;

