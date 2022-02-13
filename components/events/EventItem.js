import Image from "next/image";
import Link from "next/link";
import classes from "./EventItem.module.css";

const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const eventDetailsLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <Image src={"/" + image} alt={title} height="100" width="100" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{formattedDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={eventDetailsLink}>EXPLORE EVENT</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
