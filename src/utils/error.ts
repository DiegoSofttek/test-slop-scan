export class DatabaseError extends Error {
  constructor(public query: string, message: string) {
    super(message);
    this.name = "DatabaseError";
  }
}

export class ApiError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
    this.name = "ApiError";
  }
}