import { ChakraProvider } from '@chakra-ui/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body style={{ backgroundColor: '#2D3748', color: '#F7FAFC' }}>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
