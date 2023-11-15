export async function getThreads() {
  return [
    {
      id: "1234",
      title: "[Pyongyang in Pictures] With a patriotic mind.",
      content: "",
      image: "https://imgur.com/yRBCVHl.jpg",
      comment: "354",
      upvote: "45",
      posted_at: "7 days ago",
      posted_by: "spiritual_navigator",
    },
    {
      id: "3534",
      title: "[Pyongyang in Pictures] With a patriotic mind.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "https://imgur.com/yRBCVHl.jpg",
      comment: "355",
      upvote: "56",
      posted_at: "7 days ago",
      posted_by: "ChronicBitRot",
    },
    {
      id: "4456",
      title: "[Pyongyang in Pictures] With a patriotic mind.",
      content: "",
      image: "https://imgur.com/yRBCVHl.jpg",
      comment: "456",
      upvote: "65",
      posted_at: "8 days ago",
      posted_by: "iDam81",
    },
    {
      id: "9865",
      title: "[Pyongyang in Pictures] With a patriotic mind.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "",
      comment: "678",
      upvote: "56",
      posted_at: "9 days ago",
      posted_by: "MikElectronica",
    },
    {
      id: "2134",
      title: "[Pyongyang in Pictures] With a patriotic mind.",
      content: "",
      image: "https://imgur.com/yRBCVHl.jpg",
      comment: "697",
      upvote: "98",
      posted_at: "16 days ago",
      posted_by: "Chrisgone",
    },
  ];
}

export default async function handler(req, res) {
  const jsonData = await getData();
  res.status(200).json(jsonData);
}
