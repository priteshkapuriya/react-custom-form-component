Source with example to create generic React forms.

# Table of Contents

- [Getting started](#getting-started)
- [API](#api)
  - [Form](#form)
  - [formData](#formData)
  - [Sample-formData-Object](#Sample formData Object and form component)

## Getting started.

```bash
npm install
```

```bash
npm start
```

## API

### **Form**

`<Form />` component returns a controlled form that wraps input and states.

**Props**

`handleSubmit` (required): A function to handle the values when a form is submitted. This function will receive the values from the form as an object where the keys will be the name of each field.

`formData` : (required): An object array containing details about how form will looks like more details.

### **formData**

**Options**

`name` : (required): A string that defines the name of the input. This prop is what connects your input with the form state.
`label`: (required): A string for the label of your input.
`validationRules` : (optional): List of Validations that you would like on your input (currently in-built validationRules are required, requiredName, minLength, maxLength)
`customValidationRules` : (optional): If in-built doesn't suits your need, you can use this option where you pass your custom validator function and string to display when that validator is successful, library will gladly run it for you.

**Sample formData Object and form component**

```JSX

function numberCheck(inputVal) {
  if (!isNaN(inputVal) && inputVal.length > 0) { return true }
  else { return false }
}

const formData = [
  {
    name: "firstName",
    label: "First Name",
    validationRules: ["required", "requiredName:wooga.name"]
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
<Form handleSubmit={handleSubmit} formData={formData} />
```
