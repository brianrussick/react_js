import Head from 'next/head';

import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <Head>
        <title>Next JS Networking SPA Web App</title>
      </Head>  
      <EventList items={featuredEvents}/>
    </div>
  )
}
