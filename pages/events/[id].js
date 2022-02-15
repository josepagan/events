import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

const Event = () => {
  const router = useRouter();
  const { id } = router.query;
  const eventData = getEventById(id);
  if (!eventData) {
    return <p>No event found!</p>;
  }
  console.log("event data", eventData);

  return !id ? null : (
    <>
      <EventSummary title={eventData.title} />
      <EventLogistics
        date={eventData.date}
        address={eventData.location}
        image={eventData.image}
        imageAlt={eventData.title}
      />
      <EventContent>{eventData.description}</EventContent>
    </>
  );
};

export default Event;
