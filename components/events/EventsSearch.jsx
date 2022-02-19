import { useState } from "react";
import { useRef } from "react";
import Button from "../ui/Button";
import styles from "./EventsSearch.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const EventsSearch = ({onSearch}) => {
  const yearInputRef = useRef()
  const monthInputRef = useRef()

  const router = useRouter();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const submitHandler = (event) => {
    event.preventDefault()
    const selectedYear = yearInputRef.current.value
    const selectedMonth = monthInputRef.current.value
    router.push(`/events/${month}/${year}`);
    onSearch(selectedYear, selectedMonth)
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <select
            id="year"
            ref={yearInputRef}
            onChange={(e) => {
              setYear(e.target.value);
            }}
          >
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select
            id="month"
            ref={monthInputRef}
            onChange={(e) => {
              setMonth(e.target.value);
            }}
          >
            {months.map((el, index) => (
              <option key={el} value={index + 1}>
                {el}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button>Go!</Button>
    </form>
  );
};

export default EventsSearch;
