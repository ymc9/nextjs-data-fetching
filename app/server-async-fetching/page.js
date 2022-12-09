import { Suspense } from 'react';
import Quote from '../../components/server/Quote';

export default function AsyncLoading() {
    return (
        <>
            <h1>Server Component Async Fetching</h1>
            <div className="flex flex-col gap-4 w-full h-full">
                <Suspense fallback={<p>Fast component loading...</p>}>
                    <Quote />
                </Suspense>

                <Suspense fallback={<p>Slow component loading...</p>}>
                    <Quote slow={true} />
                </Suspense>
            </div>
        </>
    );
}
