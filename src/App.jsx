import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./components/Loader";
import CharacterList from "./components/CharacterList";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    const res = await axios.get(
      "https://gateway.marvel.com:443/v1/public/characters?events=116&limit=100&apikey=2b900c2e35fa6b4098b36ed2a1a2a831"
    );

    setCharacters(res.data.data.results);
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="container">
          <div className="row">
            <div className=" bg-danger mt-4 rounded-3 p-3">
              <h1
                className="text-center text-light"
                style={{ letterSpacing: "4px" }}
              >
                MARVEL CHARACTERS
              </h1>
            </div>
            <input
              type="text"
              placeholder="Search a Character"
              className="form control text-danger border-0 mt-4 p-2 rounded-4 p-2"
              style={{ background: "#000" }}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <CharacterList characters={characters} search={search} />
        </div>
      )}
    </div>
  );
}

export default App;
