export default async function handler(req, res) {
  const authToken = (req.headers.authorization || "").split("Bearer ").at(1);

  // FIXME check auth token and map to subscriber_id
  if (authToken) {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ error: "Invalid Auth Token" });
  }
}
