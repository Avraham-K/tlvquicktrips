import "./Homepage.css";
import WelcomeText from "../../Components/WelcomeText/WelcomeText";
import SelectDates from "../../Components/SelectDates/SelectDates";
import FlightFilter from "../../Components/FlightFilter/FlightFilter";

export default function Homepage() {
  return (
    <div className="globalContainer">
      <header className="headerContainer">This is the head of the page</header>

      <div className="bodyContainer">
        <WelcomeText />
        <SelectDates />
        <FlightFilter />
      </div>

      <footer className="footerContainer">This site was created by me.</footer>
    </div>
  );
}
