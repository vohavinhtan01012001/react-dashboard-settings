export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
}

export const mockUsers: User[] = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "123456",
    name: "Amin",
  },
];