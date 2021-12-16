/**
 * creates and returns a validation rule object that
 * is used by useForm hook to validate the form inputs
 *
 * @param {string} ruleName - name of the validation rule
 * @param {string} errorMessage - message to display
 * @param {function} validateFunc - validation function
 */
function createValidationRule(ruleName, errorMessage, validateFunc) {
  return {
    name: ruleName,
    message: errorMessage,
    validate: validateFunc
  };
}

export function customValidation(message, customFunction) {
  return createValidationRule(
    "customValidation",
    message,
    customFunction
  );
}

export function required(inputName) {
  return createValidationRule(
    "required",
    `${inputName} required`,
    (inputValue, formObj) => inputValue.length !== 0
  );
}

export function requiredName(inputName, validName) {
  return createValidationRule(
    "requiredName",
    `'${inputName}', must start with '${validName}'.`,
    (inputValue, formObj) => inputValue.startsWith("wooga.name")
  );
}

export function minLength(inputName, minCharacters) {
  return createValidationRule(
    "minLength",
    `${inputName} should contain atleast ${minCharacters} characters`,
    (inputValue, formObj) => inputValue.length >= minCharacters
  );
}

export function maxLength(inputName, maxCharacters) {
  return createValidationRule(
    "minLength",
    `${inputName} cannot contain more than ${maxCharacters} characters`,
    (inputValue, formObj) => inputValue.length <= maxCharacters
  );
}
