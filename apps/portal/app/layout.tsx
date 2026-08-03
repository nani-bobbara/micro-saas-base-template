export const metadata = {
  title: "Portal App",
  description: "Customer-facing SaaS portal"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
