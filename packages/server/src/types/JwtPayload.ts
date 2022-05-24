import { Role } from "@/orm/types/user.types";

export type JwtPayload = {
  id: string;
  email: string;
  role: Role;
  created_at: Date;
};
