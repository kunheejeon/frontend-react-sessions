import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  // if (data.isError) {
  //   return <p>{data.message}</p>
  // }

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw json(
      { message: "Could not fetch events." },
      { status: 500, }
    )
    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    //   status: 500,
    // });
    // return { isError: true, message: "could not fetch events." };
  } else {
    const resData = await response.json();
    return resData;
  }
}
