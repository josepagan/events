import Button from '../ui/Button'
import styles from './EventsSearch.module.css'
const EventsSearch = () => {
  const months= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
  return (
    <form className={styles.form}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <select id="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select id="month">
            {months.map((el, index) => (
              <option key={el} value={Number.toString(index + 1)}>
                {el}
              </option>
            ))}
          </select>
        </div>
      </div>
        <Button></Button>
    </form>
  );
};

export default EventsSearch;
