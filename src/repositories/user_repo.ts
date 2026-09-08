import { DatabaseError } from "../utils/errors";

export async function getUserById(id: string) {
  try {
    // Simulamos una caída de la base de datos
    if (id === "crash") {
      throw new DatabaseError("SELECT * FROM users", "Connection lost to Postgres");
    }
    return { id, name: "Test User" };
  } catch (error) {
    // Preserve the original error type and stack trace.
    throw error;
  }
}
