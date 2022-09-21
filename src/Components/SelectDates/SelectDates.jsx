import "./SelectDates.css";
import { Button } from "react-bootstrap";



export default function SelectDates() {

    
  return (
    <div className="selectDatesContainer">
      <Button className="dayButton">Wednesday</Button>
      <Button className="dayButton">Thursday</Button>
      <Button className="dayButton" variant="success">Friday</Button>
      <Button className="dayButton" variant="success">Saturday</Button>
      <Button className="dayButton">Sunday</Button>
      <Button className="dayButton">Monday</Button>
    </div>
  )
}
