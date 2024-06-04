"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Tallereslayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    return <>

        <nav>
            <Link href={'/talleres'} className={`text-2xl font-semibold ${pathname === '/talleres' ? 'text-red-600' : ''}`}  >Seccion talleres</Link>

            <ul>
                <li>
                    <Link href={'/talleres/baile'} className={`${pathname === '/talleres/baile' ? 'text-blue-600' : ''}`}>Baile</Link>
                </li>
                <li>
                    <Link href={'/talleres/danza'} className={`${pathname === '/talleres/danza' ? 'text-blue-600' : ''}`}>Danza</Link>
                </li>
                <li>
                    <Link href={'/talleres/liderazgo'} className={`${pathname === '/talleres/liderazgo' ? 'text-blue-600' : ''}`}>Liderazgo</Link>
                </li>
                <li>
                    <Link href={'/talleres/oratoria'} className={`${pathname === '/talleres/oratoria' ? 'text-blue-600' : ''}`}>Oratoria</Link>
                </li>
            </ul>

        </nav>
        {children}

    </>
}