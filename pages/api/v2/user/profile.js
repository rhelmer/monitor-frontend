import { getKnex } from "/knex/index.js";

export default async function handler(req, res) {
  const authToken = (req.headers.authorization || "").split("Bearer ").at(1);

  // FIXME check auth token and map to subscriber_id
  // if (authToken) {
    const knex = getKnex();
    const subscriber = await knex("subscribers").where("id", 4);
    res.status(200).json(subscriber);
  // } else {
  //  res.status(401).json({ error: "Invalid Auth Token" });
  //}
}
