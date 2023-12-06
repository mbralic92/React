import React, { useState } from "react";
import Ispis from "./Components/Ispis";
import Forma from "./Components/Form";

const App = () => {
  const [user, setUser] = useState("");
  const [repos, setRepos] = useState([]);

  const handleFormSubmit = (userData, reposData) => {
    setUser(userData);
    setRepos(reposData);
  };

  const handleReset = () => {
    setUser("");
    setRepos([]);
  };

  return (
    <div>
      {user ? (
        <Ispis user={user} repos={repos} onReset={handleReset} />
      ) : (
        <Forma onFormSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default App;
