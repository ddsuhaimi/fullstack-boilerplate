export type ErrorResponse = {
    success: boolean;
    errorType: ErrorType;
    errorMessage: string;
    errors: string[] | null;
    errorRaw: any;
    errorsValidation: ErrorValidation[] | null;
    stack?: string;
  };
  
  export type ErrorType = 'General' | 'Raw' | 'Validation' | 'Unauthorized';
  
  export type ErrorValidation = { [key: string]: string };
  