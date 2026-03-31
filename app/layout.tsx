export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning className="h-full">
      <body className="h-full">{children}</body>
    </html>
  )
}
