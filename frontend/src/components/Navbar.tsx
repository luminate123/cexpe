"use client"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";



export default function functionNavbarComponent() {
    const pathname = usePathname()
    return (
        <Navbar>
            <NavbarBrand>
                <p className="font-bold text-inherit">Empresa</p>
            </NavbarBrand>
            <NavbarContent justify="end" >
                <NavbarItem >
                    <Link href="/" className={`${pathname === '/' ? 'text-blue-600' : ''}`}>
                        Inicio
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/programas" className={`${pathname === '/programas' ? 'text-blue-600' : ''}`}>
                        Programas
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/talleres" className={`${pathname === '/talleres' ? 'text-blue-600' : ''}`}>
                        <p>Talleres</p>
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link href="/asesoramiento" className={`${pathname === '/asesoramiento' ? 'text-blue-600' : ''}`}>
                        Asesoramiento
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link href="/contacto" className={`${pathname === '/contacto' ? 'text-blue-600' : ''}`}>
                        Contacto
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

