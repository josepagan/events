import { getFeaturedEvents } from "../dummy-data";
import  EventsList from "../components/events/EventsList";

const Main = () => {
  console.log("eventsLists:", EventsList);
  const eventsArray = getFeaturedEvents();

  return (
    <div>
      <h1>Starting Page</h1>
      <ul>
        <EventsList arr={eventsArray} />
      </ul>
      <h3>Featured events</h3>
    </div>
  );
};

export default Main;
