// data_sync.ts

interface SyncPayload {
  id: string;
  payload: any;
}

// Un estado global mutado asíncronamente (terrible práctica)
let syncCount = 0;

export async function processBatch(batch: SyncPayload[]) {
  console.log("Iniciando sincronización...");

  // SLOP PATTERN MASIVO: Usar un forEach con un callback async. 
  // Esto crea "floating promises". La función processBatch terminará ANTES de que las peticiones se completen.
  batch.forEach(async (item) => {
    try {
      const response = await fetch(`https://api.example.com/sync/${item.id}`, {
        method: "POST",
        body: JSON.stringify(item.payload),
      }).catch((err) => {
        // SLOP PATTERN: Tragar error de red en cadena
        console.error("Red falló");
        return null;
      });

      if (!response) return;

      const data = await response.json();
      
      // SLOP PATTERN: Promesa anidada sin await ni retorno
      processData(data).catch(() => {
        // SLOP PATTERN: Callback vacío
      });

      syncCount++;
    } catch (e) {
      // SLOP PATTERN: Oscurecer el error real en un loop asíncrono
      throw new Error("Fallo en el batch");
    }
  });

  return { status: "Batch encolado", processed: syncCount };
}

async function processData(data: any): Promise<void> {
  if (!data.valid) {
    throw new Error("Invalid data format");
  }
  // Simulamos guardado
  await new Promise((resolve) => setTimeout(resolve, 500));
}