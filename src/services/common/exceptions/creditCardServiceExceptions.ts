import { ValidationError } from 'yup';

export class ExceptionBase extends Error {
  constructor(message?: string) {
    super(message);

    Error.captureStackTrace(this, ExceptionBase);
  }
}


export class BadRequestException extends ExceptionBase {
  name = 'BadRequestException';
}

export class ForbiddenException extends ExceptionBase {
  name = 'ForbiddenException';
}
export class InternalServerException extends ExceptionBase {
  name = 'InternalServerException';
}
export class NotFoundException extends ExceptionBase {
  name = 'NotFoundException';
}

export class ValidationException extends ValidationError {
  name = 'ValidationException';
}

export function throwDefaultError(message: string, error: unknown): never {
  if (error instanceof Error) {
    throw new InternalServerException(`${message}`);
  } else {
    throw new InternalServerException(`${message}`);
  }
}