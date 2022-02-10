import { getFeaturedEvents } from "../dummy-data";
// import { EventsList } from "../components/events/EventsList.js";

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


function EventsList({ arr }) {
  return arr.map(ev => <article key={ev.id}>
    <h2>{ev.title}</h2>
    <h3>{ev.location}</h3>
    <p>{ev.date}</p>
  </article>
  )
}


export default Main;
