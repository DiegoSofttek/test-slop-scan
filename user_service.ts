interface UserProfile {
    id: string;
    name: string;
    email: string;
}

export async function syncUserProfile(userId: string): Promise<UserProfile | null> {
  const profileResponse = await fetch(`https://api.example.com/users/${userId}`)
    .catch((error) => {
        throw new Error(`Failed to fetch user profile for ${userId}: ${error instanceof Error ? error.message : String(error)}`);
    });

  if (!profileResponse) {
    return null;
  }

  const profileData: UserProfile = await profileResponse.json();

  try {
    await saveToDatabase(profileData);
  } catch (dbError) {
    throw new Error(
      `Failed to save user profile ${profileData.id} to the database: ${dbError instanceof Error ? dbError.message : String(dbError)}`
    );
  }

  return profileData;
}

async function saveToDatabase(data: UserProfile): Promise<void> {
  if (Math.random() > 0.8) {
    throw new Error("Connection timeout: DB cluster is unreachable in us-east-1");
  }
  console.log(`User ${data.id} saved successfully.`);
}

export function runBackgroundCleanup() {
  try {
    executeCleanup();
  } catch (e) {
    throw e;
  }
}

function executeCleanup() {
  throw new Error("Cleanup failed due to insufficient IAM permissions");
}
