import { getAllEvents } from '../../dummy-data'
import EventsList from '../../components/events/EventsList'
import EventsSearch from '../../components/events/EventsSearch'

const AllEvents = () => {
  const eventsData = getAllEvents()
  return (
    <div>
      <EventsSearch/>
      <EventsList items={eventsData}/>
    </div>
  );
};

export default AllEvents
