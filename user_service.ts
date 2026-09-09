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
    // Preservamos el error original y agregamos contexto útil
    throw new Error("Failed to save user profile to the database", { cause: dbError });
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
    console.error("Background cleanup failed", e);
    throw e;
  }
}

function executeCleanup() {
  throw new Error("Cleanup failed due to insufficient IAM permissions");
}
