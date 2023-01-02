"use client";
import * as authService from "@/services/auth.service";
import { useAppSelector } from "@/redux-toolkit/redux-hooks";
import { RootState } from "@/redux-toolkit/store";

// This is a Client Component
export default function DashboardLayout({ children }) {
  const data = useAppSelector((state: RootState) => state.user);
  const login = authService.login("test@gmail.com", "123456");
  return (
    <div>
      <h2>My Dashboard Layout</h2>
      <p>This is where you setup general layout like Sidebar and Header</p>
      {children}
    </div>
  );
}
