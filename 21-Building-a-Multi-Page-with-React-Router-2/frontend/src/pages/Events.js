import EventsList from "../components/EventsList";

export default function EventsPage() {
  const DUMMY_EVENTS = [
    {
      "id": "e1",
      "title": "A dummy event",
      "date": "2023-02-22",
      "image": "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
      "description": "Join this amazing event and connect with fellow developers."
    }
  ];

  return (
    <>
      <h1>EventsPage</h1>
      <EventsList events={DUMMY_EVENTS} />
    </>
  )
}