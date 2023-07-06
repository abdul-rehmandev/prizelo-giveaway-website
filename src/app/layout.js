import './globals.scss'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

export const metadata = {
  title: 'Prizlo - Win with trust',
  description: 'Welcome to Prizelo, the ultimate destination for exciting giveaways and incredible prizes. We bring you a platform where you can participate in various contests and sweepstakes to win amazing rewards.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
