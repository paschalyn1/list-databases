import "./styles.css";
import Comp from "./Comp1.js";
import portal from "./List.js";
import { useState, useEffect } from "react";

export default function App() {
  const [name, setName] = useState("");

  const getdatafromapi = async () => {
    const getdata = await fetch("https://randomuser.me/api");
    const data = await getdata.json();
    setName(data.results[0].name.first);
  };
  useEffect(() => {
    getdatafromapi();
  }, []);
  return (
    <div className="App">
      {portal.map((portal) => (
        <Comp
          name={name}
          age={portal.age}
          comment={portal.comment}
          image={portal.image}
        />
      ))}
    </div>
  );
}
