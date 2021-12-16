import React from "react";
import useForm from "./useForm";
import Input from "./components/Input";

import {
  required,
  requiredName,
  maxLength,
  minLength,
  customValidation
} from "./utils/inputValidationRules";

import "./styles.css";
import "./Form.css";

function createFormFieldConfig(label, name, type, defaultValue) {
  return {
    renderInput: (handleChange, value, isValid, error, key) => {
      return (
        <Input
          key={key}
          name={name}
          type={type}
          label={label}
          isValid={isValid}
          value={value}
          handleChange={handleChange}
          errorMessage={error}
        />
      );
    },
    label,
    value: defaultValue,
    valid: false,
    errorMessage: "",
    touched: false,
    name: name
  };
}

const Form = ({ handleSubmit, formData }) => {
  let userData = {};
  formData.forEach((data) => {
    let validationRules = [];
    if (data.validationRules) {
      data.validationRules.forEach((rule) => {
        let ruleDetails = [];
        ruleDetails = rule.split(":");
        if (ruleDetails[0] === "required") { validationRules.push(required(data.label)) }
        if (ruleDetails[0] === "requiredName") { validationRules.push(requiredName(data.label, ruleDetails[1])) }
        if (ruleDetails[0] === "minlength") { validationRules.push(minLength(data.label, ruleDetails[1])) }
        if (ruleDetails[0] === "maxlength") { validationRules.push(maxLength(data.label, ruleDetails[1])) }
      })
    }
    if (data.customValidationRules) {
      data.customValidationRules.forEach((rule) => {
        validationRules.push(customValidation(rule.message, rule.func))
      })
    }
    let defaultValue = data.defaultValue ? data.defaultValue : "";
    userData[data.name] = {
      ...createFormFieldConfig(data.label, data.name, "text", defaultValue),
      validationRules
    }
  })
  const { renderFormInputs, isFormValid } = useForm(userData);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    let data = new FormData(event.target)
    let formObject = Object.fromEntries(data.entries())
    handleSubmit(formObject);
  }

  return (
    <form onSubmit={handleFormSubmit} className="form">
      {renderFormInputs()}
      <button type="submit" disabled={!isFormValid()}>
        Submit
      </button>
    </form>
  );
};
export default Form;
