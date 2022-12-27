"use client";
import { useAppSelector } from "@/redux-toolkit/redux-hooks";
import { RootState, RootState2, IRootState } from "@/redux-toolkit/store";

import { useSelector as useReduxSelector, TypedUseSelectorHook } from "react-redux";
// this directive should be at top of the file, before any imports.

// This is a Client Component
export default function DashboardLayout({ children }) {
  const data = useAppSelector((state: RootState) => state);
  return (
    <div>
      <h2>My Dashboard</h2>
      {children}
    </div>
  );
}
