import './globals.css';

export const metadata = {
  title: 'Shakir - Portfolio',
  description: 'Front-end Developer & UI/UX Designer Portfolio',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}