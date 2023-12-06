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
          {repos.map((repo) => (
            <div key={repo.id}>{repo.name}</div>
          ))}
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
