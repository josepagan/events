import { getFeaturedEvents } from "../dummy-data";
import  EventsList from "../components/events/EventsList";

const Main = () => {
  const eventsData = getFeaturedEvents();

  return (
    <div>
      <ul>
        <EventsList items={eventsData} />
      </ul>
    </div>
  );
};

export default Main;
