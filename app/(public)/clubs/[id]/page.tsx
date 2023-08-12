import { Organization } from '@/app/types/types';
import Image from 'next/image'

export default async function Club({ params: { id }, searchParams: { jwt } }: { params: { id: string }, searchParams: { jwt: string } }) {
  if (!jwt) {
    return (
      <h2>Add the JWT to the url i.e ...?jwt=xyzsh...</h2>
    )
  }
  
  const club: Organization = await fetch(`https://organization-uat.gaaservers.net/organization/${id}`, {
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  }).then((res) => res.json());

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <a href={`/clubs?jwt=${jwt}`}>Go back to club list</a>
      <h1>Welcome to {club.name}</h1>

      <Image src={club.logo} alt={`${club.name} logo`} width={200} height={200} />
    </main>
  )
}
