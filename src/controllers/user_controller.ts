import { getUserById } from "../repositories/user_repo";

export async function handleGetUser(req: any, res: any) {
  try {
    const user = await getUserById(req.params.id);
    return res.status(200).json(user);
  } catch (e) {
    console.error("Algo falló en el controller", e);
    return res.status(200).json({ error: true, data: null });
  }
}