class ApiError extends Error {
  constructor(message, errorType, statusCode = 500, details = {}) {
    super(message);
    this.statusCode = statusCode;
    this.errorType = errorType;
    this.details = details;
  }

  errorTypesToStatusCodes = {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500,
		VALIDATION_ERROR: 422, // UNPROCESSABLE_ENTITY, this is a custom error type wrapper
		UNSUPPORTED_MEDIA_TYPE: 415,
	};

	static badRequest(message, details = {}) {
		return new ApiError(message, "BAD_REQUEST", 400, details);
	}

	static unauthorized(message, details = {}) {
		return new ApiError(message, "UNAUTHORIZED", 401, details);
	}

	static forbidden(message, details = {}) {
		return new ApiError(message, "FORBIDDEN", 403, details);
	}

	static notFound(message, details = {}) {
		return new ApiError(message, "NOT_FOUND", 404, details);
	}

	static conflict(message, details = {}) {
		return new ApiError(message, "CONFLICT", 409, details);
	}

	static internalServerError(message, details = {}) {
		return new ApiError(message, "INTERNAL_SERVER_ERROR", 500, details);
	}

	static validationError(message, details = {}) {
		return new ApiError(message, "VALIDATION_ERROR", 422, details);
	}

	static unsupportedMediaType(message, details = {}) {
		return new ApiError(message, "UNSUPPORTED_MEDIA_TYPE", 415, details);
	}
}

export default ApiError;
