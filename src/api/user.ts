import { mockUsers, type User } from "@/mocks/authData";

interface DecodedToken {
  sub: number;
  email: string;
  iat: number;
}

function decodeMockToken(token: string): DecodedToken | null {
  try {
    const decoded = atob(token);
    return JSON.parse(decoded);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return null;
  }
}

export async function getUserProfile(token: string): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const payload = decodeMockToken(token);

      if (!payload) {
        reject(new Error("Invalid token"));
        return;
      }

      const user = mockUsers.find((u) => u.id === payload.sub && u.email === payload.email);

      if (user) {
        resolve(user);
      } else {
        reject(new Error("User not found"));
      }
    }, 500);
  });
}
