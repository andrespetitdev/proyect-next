import Link from "next/link"
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-blue-600 font-sans dark:bg-black">
      <main className="flex text-5xl">Hola mundo</main>

      <Link href="/about">
        <span className="flex text-5xl"> AboutPage</span>
      </Link>
    </div>
  )
}
