import { auth } from "@clerk/nextjs/server";
export async function getCurrentUser(): Promise<User | null> {
  const { userId } = await auth();
  return userId ? ({ id: userId } as User) : null;
}
