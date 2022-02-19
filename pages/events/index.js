import { getAllEvents } from "../../dummy-data";
import EventsList from "../../components/events/EventsList";
import EventsSearch from "../../components/events/EventsSearch";
import { useRouter } from "next/router";

const AllEvents = () => {
  const router = useRouter();
  const eventsData = getAllEvents();

  const findEventsHandler = (year, month) => {
    //adding two arguments will triger [...slug].js page instead of single [id].js page 
    router.push(`/events/${year}/${month}`);
  };

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventsList items={eventsData} />
    </div>
  );
};

export default AllEvents;
