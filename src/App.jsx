import { Listing } from "./components/Listing";
import data from "./data/etsy.json";
import "./styles/main.css";

export default function App() {
  const items = JSON.parse(JSON.stringify(data));
  return (
    <div className="wrapper">
      <Listing items={items} />
    </div>
  );
}