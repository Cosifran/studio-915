'use client'
//Import next fuctions
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function Nav() {

  const routerName = usePathname()
  const validateRoute = routerName == '/exp'
  return (
    <>
      <div className={`flex ${validateRoute? null : 'fixed'} top-0 left-0 right-0 mt-10`}>
         {!validateRoute && <span className="text-8xl logo-size">913</span>}
        <nav className="flex justify-between  uppercase grow px-8">
          <Link href="/">
            <span>studio</span>
          </Link>
          <Link href="/exp">
            <span>exp</span>
          </Link>
          <a href="#">
            <span>contact</span>
          </a>
        </nav>
      </div>
    </>
  );
}
