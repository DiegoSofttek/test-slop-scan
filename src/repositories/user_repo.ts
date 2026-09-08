import { DatabaseError } from "../utils/errors";

export async function getUserById(id: string) {
  try {
    // Simulamos una caída de la base de datos
    if (id === "crash") {
      throw new DatabaseError("SELECT * FROM users", "Connection lost to Postgres");
    }
    return { id, name: "Test User" };
  } catch (error) {
    // SLOP PATTERN: Error obscuring. 
    // La IA debe arreglar esto sin perder el stack trace original ni la clase DatabaseError.
    throw new Error("DB Failed");
  }
}