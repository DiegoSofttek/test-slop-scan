import { getUserById } from "../repositories/user_repo";
import { ApiError } from "../utils/errors";

export async function handleGetUser(req: any, res: any) {
  try {
    const user = await getUserById(req.params.id);
    return res.status(200).json(user);
  } catch (e) {
    // SLOP PATTERN: Error swallowing.
    // La IA tiene que darse cuenta de que no puede solo hacer "throw e" aquí porque crashearía el servidor Express.
    // Debería usar el ApiError o pasar el error al middleware (next).
    console.error("Algo falló en el controller", e);
    return res.status(200).json({ error: true, data: null });
  }
}