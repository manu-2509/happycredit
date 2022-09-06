import "./styles.css";
import { Cards } from "./components/Cards";
import { Search } from "./components/Search";
import { useState, useEffect } from "react";
export default function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [res, setRes] = useState([]);
  const [sbar, setSbar] = useState([false]);
  const handleChange = (val) => {
    if (val.length <= 3) {
      setSbar(false);
      return;
    } else {
      setSbar(true);
      setSearch(val);
    }
  };
  useEffect(() => {
    setRes([]);
    data.filter((elem) => {
      if (elem.title.toLowerCase().includes(search.toLowerCase())) {
        setRes((res) => [...res, elem.title]);
      }
    });
  }, [search]);
  return (
    <div className="App">
      <Search
        handleChange={handleChange}
        res={res}
        sbar={sbar}
        setSbar={setSbar}
      ></Search>
      <Cards data={data} setData={setData}></Cards>
    </div>
  );
}
