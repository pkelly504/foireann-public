import { OrganizationsResponse, PagedResponse } from '@/app/types/types';
import Image from 'next/image'

export default async function ClubList({ jwt }: { jwt: string }) {
  const clubs: PagedResponse<OrganizationsResponse> = await fetch(`https://organization-uat.gaaservers.net/organization`, {
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  }).then((res) => res.json());

  return (
    <div>
      {clubs._embedded.organizations.map((club) => (
        <div key={club.id}>
          <h2>{club.name}</h2>
          <Image src={club.logo} alt={`${club.name} logo`} width={200} height={200} />
          <a href={`/clubs/${club.id}?jwt=${jwt}`}>Go to {club.name} Homepage</a>
        </div>
      ))}
    </div>
  )
}
