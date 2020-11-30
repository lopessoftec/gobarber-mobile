import { ValidationError } from 'yup';

interface Errors {
  // vai dizer que pode ser qualquer coisa que seja uma string
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
