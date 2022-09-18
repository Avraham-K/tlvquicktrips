import WelcomeText from "../../Components/WelcomeText/WelcomeText";
import SelectDates from "../../Components/SelectDates/SelectDates";
import FlightFilter from "../../Components/FlightFilter/FlightFilter";

export default function Homepage() {
  return (
    <>
      <header className="App-header">This is the head of the page</header>

      <body>
        <WelcomeText />
        <SelectDates />
        <FlightFilter />
      </body>

      <footer className="App-footer">This site was created by me.</footer>
    </>
  );
}
