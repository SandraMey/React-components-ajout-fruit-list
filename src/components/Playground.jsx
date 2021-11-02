import React from "react";
import { useState } from "react";

function Playground() {
  //[state, fnModifyState]

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");

    const newOptions = [...options, fruit];
    setOptions(newOptions);
    setFruit("");
  };

  const handleOptionChange = (e) => {
    setPickFruit(e.target.value);
  };
  const [fruit, setFruit] = useState("");
  const [pickFruit, setPickFruit] = useState("");
  const [options, setOptions] = useState(["banane", "fraise", "Licchi"]);

  return (
    <div>
      <h2>My fruits</h2>
      <input list="fruits" onChange={handleOptionChange} value={pickFruit} />

      <datalist id="fruits">
        {options.map((opt) => (
          <option key={opt} value={opt} />
        ))}
      </datalist>

      <h4 style={{ marginTop: "30px" }}>Add a fruit</h4>
      {/* //ctrl+shift+p */}
      <form action="" onSubmit={handleSubmit}>
        <input
          name="add-fruit"
          value={fruit}
          onChange={(e) => setFruit(e.target.value)}
        />
        <button>Ajouter fruit</button>
      </form>
    </div>
  );
}

export default Playground;
