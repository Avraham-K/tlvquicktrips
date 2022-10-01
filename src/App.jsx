import Homepage from "./pages/Homepage/Homepage";
import DataContextProvider from "./Components/DataContextProvider";

export default function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <Homepage />
      </DataContextProvider>
    </div>
  );
}
