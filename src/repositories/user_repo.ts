import { DatabaseError } from "../utils/errors";

export async function getUserById(id: string) {
    try {
        if (id === "crash") {
            throw new DatabaseError("SELECT * FROM users", "Connection lost to Postgres");
        }
        return { id, name: "Test User" };
    } catch (error) {
        throw error;
    }
}
