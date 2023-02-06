import { useState, useRef, useEffect } from "react";

const NationalityGuesser = () => {
  const [nameInput, setName] = useState("");
  const [countryID, setID] = useState("");
  const [probability, setProbability] = useState("");

  const inputRef = useRef();
  const name = nameInput;

  // Apply focus onto input field
  useEffect(() => {
    inputRef.current.focus();
  });

  const nameData = () => {
    if (name === "") {
      setID("");
      setProbability("");
      // Else Call Api and get country ID and probability
    } else {
      const fetchData = async () => {
        let res = await fetch(`https://api.nationalize.io?name=${nameInput}`);
        let data = await res.json();

        // First object in Country array
        const firstObject = data.country[0];

        let countryID = firstObject.country_id;
        let probability = firstObject.probability;

        setID(countryID);
        setProbability(probability);
      };
      fetchData();
    }
  };

  return (
    <div className="form-container">
      <form className="form">
        <h1>Nationality Guesser</h1>
        <input
          placeholder="Input name"
          ref={inputRef}
          value={nameInput}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>

        <button type="button" onClick={nameData}>
          Predict
        </button>
        <br></br>
        <output>Country ID: {countryID}</output>
        <br></br>
        <output>Probability: {probability}</output>
      </form>
    </div>
  );
};

export default NationalityGuesser;
