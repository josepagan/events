import Image from "next/image";
import classes from "./EventItem.module.css";
import Button from "../ui/Button";
import DateIcon from "../../components/icons/date-icon";
import AddressIcon from "../../components/icons/address-icon";
import ArrowRightIcon from "../../components/icons/arrow-right-icon";

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
      <img
        src={"/" + image}
        alt={title}
        // height="100%" width="200%"
      />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{formattedDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={eventDetailsLink}>
            <span>EXPLORE EVENT</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
