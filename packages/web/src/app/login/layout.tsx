import MinimalLayout from "@/components/layouts/MinimalLayout";

// This is a Server Component
export default function Layout({ children }: { children: React.ReactNode }) {
  return <MinimalLayout>{children}</MinimalLayout>;
}
