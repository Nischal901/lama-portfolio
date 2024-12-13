import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-xl">
      NL
    </Link>
  )
}

