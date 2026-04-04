'use client';

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link as HeroUILink,
  Button,
  Select,
  SelectItem,
} from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const EMAIL = "circulomusicaldesevilla@gmail.com";
const PHONES = "691 196 341 / 630 876 239";

export const CirculoMusicalLogo = () => {
  return (
    <div className="relative h-12 w-[180px] sm:h-20 sm:w-[250px]">
      <Image
        src="/images/logo.png"
        alt="Círculo Musical de Sevilla"
        fill
        className="object-contain object-left"
        sizes="(max-width: 640px) 180px, 250px"
        priority
      />
    </div>
  );
};

type HeaderProps = {
  clases: { title: string; href: string; image: string }[];
};

export function Header({ clases }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const closeMenu = () => setIsMenuOpen(false);

  const handleSelectionChange = (value: string | undefined) => {
    if (value) {
      router.push(value);
    }
  };

  const contactBlock = (
    <ul className="flex flex-col gap-1 items-start list-disc pl-4">
      <li>
        <HeroUILink
          as={Link}
          href={`mailto:${EMAIL}`}
          size="sm"
          className="text-default-600 hover:text-foreground"
        >
          {EMAIL}
        </HeroUILink>
      </li>
      <li>
        <span className="text-sm text-default-600">{PHONES}</span>
      </li>
    </ul>
  );

  const selectAndButton = (
    <>
      <Select className="w-full sm:max-w-xs" label="Clases de música" onSelectionChange={(keys) => handleSelectionChange(keys.currentKey)}>
        {clases.map((c) => (
          <SelectItem key={c.href}>{c.title}</SelectItem>
        ))}
      </Select>
      <Button as={Link} href="/acerca-de" color="primary" variant="solid" className="w-full sm:w-auto" onPress={closeMenu}>
        Contacto
      </Button>
    </>
  );

  return (   
    <> 
    <Navbar
      maxWidth="full"
      className="h-16 sm:h-20"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="center" className="gap-2 sm:gap-3">
        <NavbarMenuToggle className="sm:hidden" aria-label="Abrir menú" />
        <NavbarBrand as={Link} href="/" className="gap-2 shrink-0">
          <CirculoMusicalLogo />
        </NavbarBrand>
        <NavbarItem className="hidden sm:block">{contactBlock}</NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex gap-4">
        {selectAndButton}
      </NavbarContent>

      {/* Mobile: menú desplegable */}
      <NavbarMenu className="pt-6 gap-4 px-6">
        <NavbarMenuItem onClick={closeMenu}>{contactBlock}</NavbarMenuItem>
        <NavbarMenuItem className="flex flex-col gap-3 w-full">
          {selectAndButton}
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>

    {/* Hero */}
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center gap-6 bg-default-100 px-4 py-20 text-center sm:px-6">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cabecera.jpg"
          alt="Círculo Musical de Sevilla, escuela de música en Sevilla"
          fill
          className="object-cover object-[50%_30%]"
          priority
        />
        <div className="absolute inset-0 h-full w-full bg-black/55" aria-hidden />
      </div>
      <div className="relative z-10 flex max-w-4xl flex-col gap-4 text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Círculo Musical de Sevilla
        </h1>
        <p className="text-2xl font-bold sm:text-2xl">
          Tu escuela de música en Sevilla
        </p>
        <p className="text-4xl font-medium">
          ¡Primera clase de prueba sin compromiso!
        </p>
        <p className="text-2xl font-medium">
          ¡Clases de música en Sevilla para todas las edades!
        </p>
      </div>
    </section>
  </>
  );
}
