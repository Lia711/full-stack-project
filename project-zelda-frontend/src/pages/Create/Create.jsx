import React from 'react'
import "./Create.scss"
import Form from '../../components/Form/Form';
import Nav from '../../components/Nav/Nav';

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

  const defaultFormState = { title: "", platform: "", boxArt: "", gif1: "", gif2: "", summary: ""};

  return (
    <div className='allContent'>
        <Nav/>
        <section className="create">
      <h2 className="title">Create a Game!</h2>
      <Form
        handleSubmit={handleSubmit}
        defaultFormState={defaultFormState}
      />
    </section>
    </div>
  );
};


export default Create