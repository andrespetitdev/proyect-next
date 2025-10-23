import { Navbar } from "@/components/Navbar/Navbar"
export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <h3 className="text-lg">Hola Mundo</h3>
        {children}
      </main>
    </>
  )
}
