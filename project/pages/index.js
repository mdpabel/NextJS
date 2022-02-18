import Events from "../components/events";
import { getFeaturedEvents } from "../dummy-data";

function Home() {
  const featuredEvent = getFeaturedEvents();

  return <Events items={featuredEvent} />;
}

export default Home;
