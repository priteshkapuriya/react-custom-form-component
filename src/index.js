import React from "react";
import ReactDOM from "react-dom";

import Form from "./Form";

function numberCheck(inputVal) {
  if (!isNaN(inputVal) && inputVal.length > 0) { return true }
  else { return false }
}

const formData = [
  {
    name: "firstName",
    label: "First Name",
    validationRules: ["required", "requiredName:wooga.name"] // we can convert requiredName rule to custom rule to by chossing our own logic :)
  },
  {
    name: "lastName",
    label: "Last Name",
    validationRules: ["minlength: 3", "maxlength: 20"]
  },
  {
    name: "num",
    label: "Number",
    customValidationRules: [
      {
        message: "should contain only numbers",
        func: numberCheck
      }
    ]
  }
]

const handleSubmit = (formObject) => {
  console.log(formObject) //use data as per your convenience
}

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <h1>Working Example</h1>
    <Form handleSubmit={handleSubmit} formData={formData} />
  </React.StrictMode>,
  rootElement
);
