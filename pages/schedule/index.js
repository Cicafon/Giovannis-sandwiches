import ScheduledItems from "../../components/ScheduledItems";
import { MongoClient } from "mongodb";
import { url } from "../api/url";

const Schedule = (props) => {
  return (
    <>
      <h2 className="page-title">Scheduled Orders</h2>
      <ScheduledItems items={props.items} />;
    </>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(url);
  const db = client.db();

  const ordersCollection = db.collection("order");

  const loadedOrders = await ordersCollection.find().toArray();

  const currentTime = new Date();
  let transformedOrders = [];

  for (const element of loadedOrders) {
    let timeToStart = currentTime;
    if (transformedOrders.length !== 0) {
      timeToStart = new Date(
        transformedOrders[transformedOrders.length - 1].finishTime
      );
    }
    const newItem = {
      id: element._id.toString(),
      text: element.text,
      startTime: timeToStart.toString(),
      finishTime: new Date(
        timeToStart.getTime() + element.duration * 60000
      ).toString(),
    };
    transformedOrders.push(newItem);
  }

  client.close();
  return {
    props: {
      items: transformedOrders,
    },
  };
}

export default Schedule;

// const DUMMY_ITEMS = [
//   {
//     id: 1,
//     duration: 2.5,
//     text: "Make 1 sandwich for Alfi",
//     status: "pending",
//   },
//   {
//     id: 2,
//     duration: 1,
//     text: "Serve 1 sandwich for Alfi",
//     status: "pending",
//   },
//   {
//     id: 3,
//     duration: 5,
//     text: "Make 2 sandwich for Sam",
//     status: "pending",
//   },
//   {
//     id: 4,
//     duration: 2,
//     text: "Serve 2 sandwich for Sam",
//     status: "pending",
//   },
// ];
