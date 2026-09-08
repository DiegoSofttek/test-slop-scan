interface UserProfile {
    id: string;
    name: string;
    email: string;
}

export async function syncUserProfile(userId: string): Promise<UserProfile | null> {
  // Patrón Slop 1: Tragar errores con un fallback silencioso en una promesa
  const profileResponse = await fetch(`https://api.example.com/users/${userId}`)
    .catch(() => {
        console.log("Network error, pretending everything is fine");
        return null;
    });

  if (!profileResponse) {
    return null;
  }

  const profileData: UserProfile = await profileResponse.json();

  try {
    // Simulamos guardar en base de datos
    await saveToDatabase(profileData);
  } catch (dbError) {
    // Patrón Slop 2: Oscurecer el error real devolviendo uno genérico que pierde el Stack Trace
    throw new Error("Something went wrong with the database");
  }

  return profileData;
}

async function saveToDatabase(data: UserProfile): Promise<void> {
  // Simulamos un fallo aleatorio
  if (Math.random() > 0.8) {
    throw new Error("Connection timeout: DB cluster is unreachable in us-east-1");
  }
  console.log(`User ${data.id} saved successfully.`);
}

export function runBackgroundCleanup() {
  try {
    // Tarea crítica de limpieza
    executeCleanup();
  } catch (e) {
    // Patrón Slop 3: Bloque catch vacío o que solo hace un console.error y la app sigue como si nada
    console.error(e);
  }
}

function executeCleanup() {
  throw new Error("Cleanup failed due to insufficient IAM permissions");
}