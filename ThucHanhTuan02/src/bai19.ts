import { fetchUser } from "./bai18";

export async function fetchUsers(ids: number[]) {
  const promises = ids.map((id) => fetchUser(id));
  const users = await Promise.all(promises);
  return users;
}
