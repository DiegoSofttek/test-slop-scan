interface UserProfile {
    id: string;
    name: string;
    email: string;
}

export async function syncUserProfile(userId: string): Promise<UserProfile | null> {
  let profileResponse: Response;

  try {
    profileResponse = await fetch(`https://api.example.com/users/${userId}`);
  } catch (error) {
    console.error("Failed to fetch user profile", error);
    throw error;
  }

  const profileData: UserProfile = await profileResponse.json();

  try {
    await saveToDatabase(profileData);
  } catch (dbError) {
    throw dbError;
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
    console.error(e);
  }
}

function executeCleanup() {
  throw new Error("Cleanup failed due to insufficient IAM permissions");
}
