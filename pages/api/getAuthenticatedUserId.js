import { withAuth } from "@clerk/nextjs/api";

export default withAuth((req, res) => {
  const { sessionId, userId } = req.auth;
  console.log(JSON.stringify(req.headers));

  if (!sessionId) {
    return res.status(401).json({ id: null });
  }

  return res.status(200).json({ id: userId });
});
