import { getFeaturedEvents } from "../dummy-data";
import  EventsList from "../components/events/EventsList";

const Main = () => {
  const eventsArray = getFeaturedEvents();

  return (
    <div>
      <h1>Starting Page</h1>
      <ul>
        <EventsList items={eventsArray} />
      </ul>
      <h3>Featured events</h3>
    </div>
  );
};

export default Main;
