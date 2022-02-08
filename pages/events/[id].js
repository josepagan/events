import { useRouter } from "next/router";
const Event = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(router.query);
  return (
    <div>
      <h1>Event Page</h1>
      <h3>List event details</h3>
	      <div>Event id: {id}</div>
    </div>
  );
};

export default Event;
