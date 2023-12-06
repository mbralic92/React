import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, InputGroup, Button } from "react-bootstrap";

const Forma = ({ onFormSubmit }) => {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      );
      const userData = await userResponse.json();

      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const reposData = await reposResponse.json();

      onFormSubmit(userData, reposData);
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mb-3 mt-3">
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3 d-flex gap-3">
          <Form.Control
            type="text"
            value={username}
            onChange={handleChange}
            placeholder="GitHub Username"
            autoFocus
          />
          <Button type="submit" variant="info">
            Go!
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};

Form.propTypes = {
  onFormSubmit: PropTypes.func,
};

export default Forma;
