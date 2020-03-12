import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import CargoList from "./Cargo/CargoList";
import CargoDetail from "./Cargo/CargoDetail";
import Navigation from "./Navigation/Navigation";
import Modal from "./Shared/Modal";

import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const localStore = window.localStorage;
    if (localStore.length !== 0) {
      const parsedData = JSON.parse(localStore.getItem("data"));
      setData(parsedData);
    } else {
      setMessage("There is no locally saved data! Let's load new data?");
    }
  }, [setData]);

  const searchHandler = e => {
    setSearchTerm(e.target.value);
  };

  const handleSave = (id, value) => {
    if (value) {
      const newData = data.map(item => {
        if (item.id === id) {
          item.boxes = value;
          return item;
        } else {
          return item;
        }
      });
      setData(newData);
      setMessage("Changes saved to state!");
    } else {
      setMessage("All changes saved locally!");
      window.localStorage.setItem("data", JSON.stringify(data));
    }
  };

  const handleLoad = () => {
    setLoading(true);
    fetch(
      "https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json"
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Could not load data, try again later!");
        }
      })
      .then(data => {
        setLoading(false);
        setError(null);
        setMessage("Data loaded successfully");
        setData(data);
      })
      .catch(error => {
        setLoading(false);
        setError(error.message);
        setMessage(error.message);
      });
  };

  return (
    <Router>
      <header>
        <Navigation
          searchHandler={searchHandler}
          saveHandler={handleSave}
          loadHandler={handleLoad}
        />
      </header>
      {data.length === 0 && message ? (
        <Modal
          loading={loading}
          error={error}
          message={message}
          onAgree={handleLoad}
        />
      ) : (
        <main>
          {message ? (
            <Modal
              loading={loading}
              error={error}
              message={message}
              onAgree={() => {
                setError(null);
                setMessage(null);
              }}
              onDrop={() => {
                setError(null);
                setMessage(null);
              }}
            />
          ) : null}
          <CargoList data={data} searchTerm={searchTerm} />
          <Switch>
            <Route path="/:cargoId" exact>
              <CargoDetail data={data} saveHandler={handleSave} />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      )}
    </Router>
  );
};

export default App;
