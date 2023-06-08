import React from 'react'
import "./Create.scss"
import { Form } from 'react-router-dom'

const Create = () => {

    const handleSubmit = async game => {
    const result = await fetch("http://localhost:8080/game", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(game),
    });

    if (result.ok) {
      alert("Game added!");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const defaultFormState = { title: ""};

  return (
    <section className="create">
      <h2 className="title">Create a Game!</h2>
      <Form
        handleSubmit={handleSubmit}
        defaultFormState={defaultFormState}
        formTitle="Add A New Game"
      />
    </section>
  );
};


export default Create