export async function getThreads() {
  return [
    {
      title: "[Pyongyang in Pictures] With a patriotic mind.",
      content: "",
      image: "https://imgur.com/yRBCVHl.jpg",
    },
  ];
}

export default async function handler(req, res) {
  const jsonData = await getData();
  res.status(200).json(jsonData);
}
