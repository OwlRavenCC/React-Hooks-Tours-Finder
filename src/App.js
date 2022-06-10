import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const deleteTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const getTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const toursdata = await response.json();
      setTours(toursdata);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTours();
  }, []);

  if (loading) {
    return (
      <main className="container">
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main className="container">
        <h1>No Tours to Show</h1>
        <button className="btn danger" onClick={() => getTours()}>
          {" "}
          Refresh{" "}
        </button>
      </main>
    );
  }

  return (
    <main className="container">
      <h1>Tours Finder</h1>

      <Tours tours={tours} deleteTour={deleteTour}></Tours>
    </main>
  );
}

export default App;
