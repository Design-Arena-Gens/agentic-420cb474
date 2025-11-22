import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Guide Rapport Hiérarchique - Maladies Professionnelles',
  description: 'Guide complet pour remplir un rapport hiérarchique concernant les maladies professionnelles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
