// data_sync.ts

interface SyncPayload {
  id: string;
  payload: any;
}

// Un estado global mutado asíncronamente (terrible práctica)
let syncCount = 0;

export async function processBatch(batch: SyncPayload[]) {
  console.log("Iniciando sincronización...");

  batch.forEach(async (item) => {
    try {
      const response = await fetch(`https://api.example.com/sync/${item.id}`, {
        method: "POST",
        body: JSON.stringify(item.payload),
      }).catch((err) => {
        console.error("Red falló");
        return null;
      });

      if (!response) return;

      const data = await response.json();
      
      processData(data).catch(() => {
      });

      syncCount++;
    } catch (e) {
      throw new Error("Fallo en el batch");
    }
  });

  return { status: "Batch encolado", processed: syncCount };
}

async function processData(data: any): Promise<void> {
  if (!data.valid) {
    throw new Error("Invalid data format");
  }
  await new Promise((resolve) => setTimeout(resolve, 500));
}