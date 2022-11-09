import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Next Beta Site</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
