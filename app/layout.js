import './globals.css';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head />
            <body className="flex flex-col w-screen p-20">{children}</body>
        </html>
    );
}
