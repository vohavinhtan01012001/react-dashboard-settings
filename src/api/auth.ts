import { mockUsers } from "@/mocks/authData";

interface LoginPayload {
  email: string;
  password: string;
}

function generateMockToken(userId: number, email: string) {
  const payload = {
    sub: userId,
    email,
    iat: Date.now(),
  };
  return btoa(JSON.stringify(payload));
}


export async function login({ email, password }: LoginPayload): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockUsers.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        const token = generateMockToken(user.id, user.email);
        resolve(token);
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 1000);
  });
}