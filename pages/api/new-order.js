import { MongoClient } from "mongodb";
import { url } from "./url";

async function handler(req, res) {
  if (req.method === "POST") {
    const { name, amount } = req.body;

    let sandwich = "sandwich";
    if (amount > 1) {
      sandwich = "sandwiches";
    }
    const makeItem = {
      text: `Make ${amount} ${sandwich} for ${name}`,
      duration: 2.5 * amount,
      status: "pending",
    };
    const serveItem = {
      text: `Serve ${amount} ${sandwich} for ${name}`,
      duration: 1 * amount,
      status: "pending",
    };

    //send the 2 transferred items to DB
    const client = await MongoClient.connect(url);
    const db = client.db();

    const ordersCollection = db.collection("order");

    const result = await ordersCollection.insertMany([makeItem, serveItem]);

    client.close();

    res.status(201).json({ message: "Order sent" });
  } else {
    res.status(405).end()
  }
}

export default handler;
