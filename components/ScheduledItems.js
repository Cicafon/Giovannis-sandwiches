import ScheduleBox from "./ScheduleBox";

const ScheduledItems = ({ items }) => {

  if (!items || items.length === 0) {
    return <p>There are no pending orders. Giovanni is taking a break.</p>;
  }

    //add the time break as the latest element of the array
  const lastItemFinishTime = items[items.length - 1].finishTime;
  const itemsToDisplay = [
    ...items,
    {
      id: 0,
      text: "Take a break",
      startTime: lastItemFinishTime,
    },
  ];

  return (
    <div>
      {itemsToDisplay.map((item, index) => (
        <ScheduleBox key={item.id} item={item} serial={index + 1} />
      ))}
    </div>
  );
};

export default ScheduledItems;
