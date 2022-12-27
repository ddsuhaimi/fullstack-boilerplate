import "@/styles/reset.style.css";
import "@/styles/globals.style.css";

import { wrapper } from "@/redux-toolkit/store";
import Providers from "./providers";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
