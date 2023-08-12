import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to Foireann</h1>

      <Image src="/foireannDark.svg" alt="Foireann Logo" width={200} height={200} />

      <div>
        <a href="/clubs">Go to club selector</a>
      </div>

      <a href="https://web.gaaservers.net">Login to Foireann</a>
    </main>
  )
}
