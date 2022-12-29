import Image from "next/image"
import Container from "./Container"
import Link from "next/link"
import { useRouter } from "next/router"
import clsx from "clsx"
import { useEffect, useState } from "react"


const NAV_LINKS = [
  {
    name: "Work",
    path: "/"
  },
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Instagram",
    path: "https://www.instagram.com/aylagursoy/",
    icon: "/svg/instagram.svg"
  },
]

export default function Header() {
  const router = useRouter()
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    setScroll(window.scrollY)

    const listener = () => {
      setScroll(window.scrollY)
    }

    window.addEventListener("scroll", listener)

    return () => {
      window.removeEventListener("scroll", listener)
    }
  }, [])

  return (
    <header className={clsx("h-20 sticky top-0  flex items-center justify-end bg-white z-20 transition", scroll > 10 && "shadow-sm")}>
      <Container className="flex justify-between items-center p-4 w-full h-full" wide>
        <Link href="/" className="relative">
          <a className="relative w-28 sm:w-36 md:w-40 h-full">
            <Image src="/img/logoption.png" alt="Ayla Gursoy logo" layout="fill" objectFit="contain" />
          </a>
        </Link>

        <ul className="flex space-x-6 items-center list-none">
          {NAV_LINKS.map(link => {
            return (
              <li className={clsx("text-lg")} key={link.path}>
                <Link href={link.path}>
                  {link.icon ? <img className="h-6 w-6" src={link.icon} /> : <a>{link.name}</a>}
                </Link>
              </li>
            )
          })}
        </ul>
      </Container>
    </header>
  )
}