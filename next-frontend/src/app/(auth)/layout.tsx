import "../globals.css";

/**
 * Root layout component for the authentication pages.
 *
 * @param children - The child React nodes to render within the layout.
 * @returns The rendered children wrapped in a React fragment.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
