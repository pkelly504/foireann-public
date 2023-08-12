import { Suspense } from "react";
import ClubList from "@/app/(public)/clubs/components/ClubList";

export default async function Clubs({
  searchParams: { jwt },
}: {
  searchParams: { jwt: string };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Select your club from below</h1>

      {!jwt && <h2>Add the JWT to the url i.e ...?jwt=xyzsh...</h2>}

      {jwt && (
        <Suspense fallback={<div>Loading...</div>}>
          <ClubList jwt={jwt} />
        </Suspense>
      )}
    </main>
  );
}
