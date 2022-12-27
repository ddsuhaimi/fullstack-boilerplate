import "@/styles/reset.style.css";
import "@/styles/globals.style.css";

// import { wrapper } from "@/redux-toolkit/store";
import GlobalProviders from "@/components/layouts/GlobalProviders";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalProviders>{children}</GlobalProviders>
      </body>
    </html>
  );
}
