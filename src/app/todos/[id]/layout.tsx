export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>Individual todo</h1>
      {children}
    </div>
  );
}
