"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface ActiveLinkProps {
  path: string
  text: string
}

export const ActiveLink = ({ path, text }: ActiveLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === path

  const linkClasses = `
    mr-2
    transition-all
    hover:underline
    hover:text-blue-400
    ${isActive ? "text-blue-400" : "text-white"}
  `
  return (
    <Link className={linkClasses} href={path}>
      {text}
    </Link>
  )
}
