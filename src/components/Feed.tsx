import React, { useState } from "react";
import Card from "./Card";
import Modal from "./Modal";
import { Item } from "../types";
import Navbar from "./Navbar";
import SideInfo from "./SideInfo";
import PostIdeaModal from "./PostIdeaModal";

// Your data description remains the same
const Feed: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<Item | null>(null);
  const [isPostIdeaModalOpen, setPostIdeaModalOpen] = useState(false);

  const data: Item[] = [
    {
      id: 1,
      logo: "/Pitchwise.jpeg",
      title: "Pitchwise",
      description:
        "- A platform for rating startup ideas, giving feedback, and identifying potential problems",
    },
    {
      id: 2,
      logo: "/share_img.png",
      title: "Profiliate",
      description:
        "- Platform for Content creators to hire people to spread their content to masses through use of affiliate links.",
    },
    {
      id: 3,
      logo: "/home sold.jpeg",
      title: "DoorScore",
      description:
        "- Ever used something like Carfax to get a value report of a car? This is going to be the same thing but with houses.",
    },
    {
      id: 4,
      logo: "/food_img.jpeg",
      title: "ProPortion",
      description:
        "- Help restaurants reduce food waste by predicting the quantity of ingredients they need to buy.",
    },
    {
      id: 5,
      logo: "/focus_img.png",
      title: "FocusFlow",
      description:
        "- This app is designed to optimize your productivity and streamline your routines, providing real-time updates on your progress.",
    },
    {
      id: 6,
      logo: "/Pitchwise.jpeg",
      title: "Company F",
      description: "Personal finance management made easy.",
    },
    {
      id: 7,
      logo: "/Pitchwise.jpeg",
      title: "Company G",
      description: "AI-driven marketing solutions.",
    },
  ];

  // Dummy data for current user and side information
  const currentUser = "John Doe";
  const companyDescription =
    "Pitchwise is a platform for rating startup ideas, giving feedback, and identifying potential problems.";
  const currentFeedback = "Great concept, need more details.";

  const handlePostIdeaSubmit = (idea: string) => {
    // Handle the submitted idea (e.g., send to a server or save in state)
    console.log("New Idea Submitted:", idea);
  };

  return (
    <div>
      <Navbar />
      <div className="p-4 overflow-y-scroll h-screen flex">
        <div className="flex-grow">
          <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg mx-auto">
            {data.map((item) => (
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
        </div>
        <div className="w-1/3 ml-4">
          <SideInfo
            companyName="Pitchwise"
            currentUser={currentUser}
            companyDescription={companyDescription}
            currentFeedback={currentFeedback}
            onPostIdea={() => setPostIdeaModalOpen(true)} // Open the modal
          />
        </div>
      </div>

      {isPostIdeaModalOpen && (
        <PostIdeaModal
          onClose={() => setPostIdeaModalOpen(false)}
          onSubmit={handlePostIdeaSubmit}
        />
      )}
    </div>
  );
};

export default Feed;
