// SLOP PATTERN 1: Pass-through wrapper (Función Zombi)
// Esta función no hace absolutamente nada más que llamar a otra, añadiendo ruido.
export { dbGetUser as fetchUserById };

function dbGetUser(id: string) {
  return Promise.resolve({ id, name: "Test" });
}

// SLOP PATTERN 2: Generic record casts (Escape de tipado)
// El desarrollador (o la IA) fue muy perezoso para crear una interfaz real y usó Record<string, any>.
export function processUserData(rawData: unknown) {
  const data = rawData as Record<string, any>;
  return data.name;
}

// SLOP PATTERN 3: Stringified unknown errors
// Convertir el error a String en lugar de pasarlo correctamente o validar si es instancia de Error.
export function parseConfig(configStr: string) {
  try {
    return JSON.parse(configStr);
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }
    throw new Error("Failed to parse config", { cause: e });
  }
}

// SLOP PATTERN 4: Generic status envelopes
// Envolver respuestas en objetos genéricos sin tipado estricto en lugar de lanzar errores o usar uniones (Unions).
export function validateSession(token: string) {
  if (!token) {
    return { status: "error", data: null, error: "Missing token" };
  }
  return { status: "success", data: { userId: 123 }, error: null };
}
