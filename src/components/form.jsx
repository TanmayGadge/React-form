import React, {useState} from "react";
import "./form.css";


function Form() {
  const [name, setName] = useState("");
  const [isName, setIsName] = useState(false);
  const [headingText, setHeading] = useState("");


  return (
    <>
      <div className="container">
        <form
          onSubmit={(event) => {
            setHeading(name);
            setIsName(true);
            event.preventDefault();
          }}
        >
          <h1 className="heading">
            Welcome <br /> {isName ? headingText : "User"}
          </h1>
          <input
            placeholder="Enter Your Name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
