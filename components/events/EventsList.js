import EventItem from "./EventItem";
import classes from "./EventsList.module.css"

const EventsList = ({ items }) => {
  const listItems = items.map((ev) => (
    <EventItem
      key={ev.id}
      title={ev.title}
      date={ev.date}
      location={ev.location}
      image={ev.image}
    />
  ));
  return <ul className={classes.list}>{listItems}</ul>;
};
export default EventsList;
