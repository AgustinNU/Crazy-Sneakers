import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Bienvenido a Crazy Sneakers!"}/>
    </div>
  );
};

export default App;
