import React, { useState } from "react";
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
          {/* <div className="heading-container">
          </div> */}
          <h1 className="heading">Welcome</h1>
            <h1 className="heading user">
             <span className="username">{isName ? headingText : "User"}</span>
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
