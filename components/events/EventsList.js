const EventsList = ({ arr }) => {
  return arr.map(ev => <article key={ev.id}>
    <h2>{ev.title}</h2>
    <h3>{ev.location}</h3>
    <p>{ev.date}</p>
  </article>
  )
}

export default EventsList
