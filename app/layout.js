import { ChakraProvider } from '@chakra-ui/react';
import { Analytics } from "@vercel/analytics/react"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body style={{ backgroundColor: '#2D3748', color: '#F7FAFC' }}>
        <ChakraProvider>
          {children}
        </ChakraProvider>
        <Analytics/>
      </body>
    </html>
  );
}
