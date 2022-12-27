import DashboardLayout from "@/components/DashboardLayout";

// This is a Server Component
export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
