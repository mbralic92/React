import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

class Ispis extends Component {
  render() {
    const { user, repos, onReset } = this.props;

    return (
      <div className="d-flex flex-column justify-content-center align-items-center mb-3 mt-3">
        <img
          src={user.avatar_url}
          alt="Avatar"
          style={{ width: "200px", height: "200px" }}
        />
        <h2>{user.name}</h2>
        <p>Bio: {user.bio}</p>
        <p>Location: {user.location}</p>
        <p>Repositories:</p>
        <div>
          <ul>
            {repos.map((repo, index) => (
              <li
                key={repo.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "lightgray" : "white",
                }}
              >
                {repo.name}
              </li>
            ))}
          </ul>
        </div>
        <Button onClick={onReset} variant="danger" className=" mt-3">
          Reset
        </Button>
      </div>
    );
  }
}

Ispis.propTypes = {
  user: PropTypes.object,
  repos: PropTypes.array,
  onReset: PropTypes.func,
};

export default Ispis;
