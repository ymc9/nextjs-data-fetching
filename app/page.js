import Link from 'next/link';

export default function Home() {
    return (
        <nav>
            <ul className="flex flex-col gap-4 text-2xl">
                <li>
                    <Link
                        className="cursor-pointer underline"
                        href="/server-async-fetching"
                    >
                        Async Server Component Fetching
                    </Link>
                </li>

                <li>
                    <Link
                        className="cursor-pointer underline"
                        href="/client-fetching"
                    >
                        Client Component Fetching
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
