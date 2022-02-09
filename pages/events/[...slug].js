import { useRouter } from "next/router";

const FilteredEvents = () => {
  const router = useRouter();
  const { slug } = router.query;
  const omg = slug[1];
  //really need to learn testing, should I
  //if slug has no 3 different elements, something is wrong
  //if it has 3, dictate first is year, second is month and last is id of event
  //filter

  return (
    <div>
      <h1>FilteredEvents Page</h1>
      <div>Event id:</div>
    </div>
  );
};

export default FilteredEvents;
