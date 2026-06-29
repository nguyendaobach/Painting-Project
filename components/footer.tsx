import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 dark:border-neutral-900 w-full mt-auto">
      <div className="container mx-auto px-6 lg:px-12 py-6 text-center">
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} Minh Doan. All Rights Reserved.
        </p>
        <Link
          href="/terms"
          className="text-xs text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors underline mt-2 inline-block"
        >
          Terms & Copyright
        </Link>
      </div>
    </footer>
  )
}