import React from 'react';
import { string, bool, func } from 'prop-types';

/**
 * @description reusable input component
 * @returns {HTMLInputElement} input
 */
const InputElement = ({
  customClass,
  inputId,
  inputName,
  inputPlaceholder,
  inputValue,
  inputType,
  onChange,
  errorMessage,
  isRequired,
  isDisabled
}) => (
  <>
    <input
      className={`input-field ${customClass && customClass}`}
      id={inputId}
      name={inputName}
      placeholder={inputPlaceholder}
      value={inputValue}
      type={inputType}
      onChange={onChange}
      required={isRequired}
      disabled={isDisabled}
    />
    {errorMessage && <p className='form-error red-cl'>{errorMessage}</p>}
  </>
);
InputElement.propTypes = {
  /**
   * The input's value
   */
  inputValue: string,
  /**
   * The custom class containing extra styles for the input
   */
  customClass: string,
  /**
   * The id of the input
   */
  inputId: string,
  /**
   * The name attribute for the input
   */
  inputName: string,
  /**
   * The type attribute for the input
   */
  inputType: string,
  /**
   * The placeholder for the input
   */
  inputPlaceholder: string,
  /**
   * The function handler for a change event on the input
   */
  onChange: func.isRequired,
  /**
   * The error message to display for the input field
   */
  errorMessage: string,
  /**
   * if the input field is required or not
   */
  isRequired: bool,
  /**
   * if the input field is disabled or not
   */
  isDisabled: bool
};

InputElement.defaultProps = {
  customClass: '',
  inputId: '',
  inputName: '',
  inputType: '',
  inputPlaceholder: '',
  inputValue: '',
  errorMessage: '',
  isRequired: false,
  isDisabled: false
};

export default InputElement;
