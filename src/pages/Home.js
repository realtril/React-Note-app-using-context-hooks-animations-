import React, { useEffect, useContext } from "react";
import Form from "../components/Form";
import Notes from "../components/Notes";
import { FirebaseContext } from "../firebase/firebaseContext";
import { Loader } from "../components/Loader";

const Home = () => {
  const { loading, notes, fetchNotes, removeNote } = useContext(
    FirebaseContext
  );
  
  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <Form />
      <hr />
      {loading ? <Loader /> : <Notes notes={notes} onRemove={removeNote} />}
    </>
  );
};

export default Home;
