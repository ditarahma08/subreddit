const data = [
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

const comments = [
  {
    id: "1234",
    comment: [
      {
        posted_by: "u/jdfhge",
        posted_at: "5 days ago",
        reply: "5",
        upvote: "6",
        content:
          "Reminds me of all those times I fell on the spikes in the prince of persia game 20 years ago",
        comment: [
          {
            posted_by: "u/ugdfs",
            posted_at: "5 days ago",
            reply: "5",
            upvote: "6",
            content:
              "Reminds me of all those times I fell on the spikes in the prince of persia game 20 years ago",
          },
        ],
      },
      {
        posted_by: "u/sjhfgysud",
        posted_at: "5 days ago",
        reply: "5",
        upvote: "6",
        content:
          "Reminds me of all those times I fell on the spikes in the prince of persia game 20 years ago",
        comment: [
          {
            posted_by: "u/Sesmo_FPV",
            posted_at: "5 days ago",
            reply: "5",
            upvote: "6",
            content:
              "Reminds me of all those times I fell on the spikes in the prince of persia game 20 years ago",
          },
        ],
      },
    ],
  },
  {
    id: "3534",
    comment: [
      {
        posted_by: "u/uyrdfh",
        posted_at: "5 days ago",
        reply: "5",
        upvote: "6",
        content:
          "Reminds me of all those times I fell on the spikes in the prince of persia game 20 years ago",
        comment: [
          {
            posted_by: "u/Sesmo_FPV",
            posted_at: "5 days ago",
            reply: "5",
            upvote: "6",
            content:
              "Reminds me of all those times I fell on the spikes in the prince of persia game 20 years ago",
          },
        ],
      },
      {
        posted_by: "u/Sesmo_FPV",
        posted_at: "5 days ago",
        reply: "5",
        upvote: "6",
        content:
          "Reminds me of all those times I fell on the spikes in the prince of persia game 20 years ago",
        comment: [
          {
            posted_by: "u/Sesmo_FPV",
            posted_at: "5 days ago",
            reply: "5",
            upvote: "6",
            content:
              "Reminds me of all those times I fell on the spikes in the prince of persia game 20 years ago",
          },
        ],
      },
    ],
  },
  {
    id: "4456",
    comment: [
      {
        posted_by: "u/Sesmo_FPV",
        posted_at: "5 days ago",
        reply: "5",
        upvote: "6",
        content:
          "Reminds me of all those times I fell on the spikes in the prince of persia game 20 years ago",
        comment: [
          {
            posted_by: "u/Sesmo_FPV",
            posted_at: "5 days ago",
            reply: "5",
            upvote: "6",
            content:
              "Reminds me of all those times I fell on the spikes in the prince of persia game 20 years ago",
          },
        ],
      },
      {
        posted_by: "u/Sesmo_FPV",
        posted_at: "5 days ago",
        reply: "5",
        upvote: "6",
        content:
          "Reminds me of all those times I fell on the spikes in the prince of persia game 20 years ago",
        comment: [
          {
            posted_by: "u/Sesmo_FPV",
            posted_at: "5 days ago",
            reply: "5",
            upvote: "6",
            content:
              "Reminds me of all those times I fell on the spikes in the prince of persia game 20 years ago",
          },
        ],
      },
    ],
  },
  {
    id: "9865",
    comment: [
      {
        posted_by: "u/Sesmo_FPV",
        posted_at: "5 days ago",
        reply: "5",
        upvote: "6",
        content:
          "Reminds me of all those times I fell on the spikes in the prince of persia game 20 years ago",
        comment: [
          {
            posted_by: "u/Sesmo_FPV",
            posted_at: "5 days ago",
            reply: "5",
            upvote: "6",
            content:
              "Reminds me of all those times I fell on the spikes in the prince of persia game 20 years ago",
          },
        ],
      },
      {
        posted_by: "u/Sesmo_FPV",
        posted_at: "5 days ago",
        reply: "5",
        upvote: "6",
        content:
          "Reminds me of all those times I fell on the spikes in the prince of persia game 20 years ago",
        comment: [
          {
            posted_by: "u/Sesmo_FPV",
            posted_at: "5 days ago",
            reply: "5",
            upvote: "6",
            content:
              "Reminds me of all those times I fell on the spikes in the prince of persia game 20 years ago",
          },
        ],
      },
    ],
  },
  {
    id: "2134",
    comment: [
      {
        posted_by: "u/Sesmo_FPV",
        posted_at: "5 days ago",
        reply: "5",
        upvote: "6",
        content:
          "Reminds me of all those times I fell on the spikes in the prince of persia game 20 years ago",
        comment: [
          {
            posted_by: "u/Sesmo_FPV",
            posted_at: "5 days ago",
            reply: "5",
            upvote: "6",
            content:
              "Reminds me of all those times I fell on the spikes in the prince of persia game 20 years ago",
          },
        ],
      },
      {
        posted_by: "u/Sesmo_FPV",
        posted_at: "5 days ago",
        reply: "5",
        upvote: "6",
        content:
          "Reminds me of all those times I fell on the spikes in the prince of persia game 20 years ago",
        comment: [
          {
            posted_by: "u/Sesmo_FPV",
            posted_at: "5 days ago",
            reply: "5",
            upvote: "6",
            content:
              "Reminds me of all those times I fell on the spikes in the prince of persia game 20 years ago",
          },
        ],
      },
    ],
  },
];

export async function getThreads() {
  return data;
}

export async function getThread(id) {
  return data.find((item) => item.id === id);
}

export async function getComment(id) {
  return comments.find((item) => item.id === id);
}

export default async function handler(req, res) {
  const jsonData = await getData();
  res.status(200).json(jsonData);
}
