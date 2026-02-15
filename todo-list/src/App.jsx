import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/Footer";
import Todos from "./components/Todos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header title="My Todo List" searchBar={true} />
      <Footer />
      <Todos />
    </>
  );
}

export default App;
