'use client';

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
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
import { usePathname, useRouter } from "next/navigation";
import type { HTMLMotionProps } from "framer-motion";

const EMAIL = "circulomusicaldesevilla@gmail.com";
const PHONES = "691 196 341 / 630 876 239";

export const CirculoMusicalLogo = () => {
  return (
    <div className="relative h-12 w-[100px] sm:h-20 sm:w-[250px]">
      <Image
        src="/images/logo.png"
        alt="Círculo Musical de Sevilla"
        fill
        className="object-contain object-left"
        sizes="(max-width: 640px) 100px, 250px"
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
  const pathname = usePathname();
  const isHome = pathname === "/";
  const heroTitleClass =
    "text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl";

  const closeMenu = () => setIsMenuOpen(false);

  const handleSelectionChange = (value: string | undefined) => {
    if (value) {
      closeMenu();
      router.push(value);
    }
  };

  const contactBlock = (
    <ul className="flex min-w-0 flex-col items-start gap-0.5 list-disc pl-3 sm:gap-1 sm:pl-4">
      <li className="min-w-0">
        <HeroUILink
          as={Link}
          href={`mailto:${EMAIL}`}
          size="sm"
          className="break-all text-[10px] leading-tight text-default-600 hover:text-foreground sm:break-normal sm:text-sm"
        >
          {EMAIL}
        </HeroUILink>
      </li>
      <li>
        <span className="text-[10px] leading-tight text-default-600 sm:whitespace-nowrap sm:text-sm">
          {PHONES}
        </span>
      </li>
    </ul>
  );

  /** HeroUI anima el menú móvil a `calc(100vh - navbar)`; lo sustituimos por altura al contenido. */
  const mobileMenuMotionProps = {
    variants: {
      enter: {
        height: "auto",
        transition: { duration: 0.3, ease: "easeOut" as const },
      },
      exit: {
        height: 0,
        transition: { duration: 0.25, ease: "easeIn" as const },
      },
    },
  } satisfies Omit<HTMLMotionProps<"ul">, "ref">;

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
      className="h-auto min-h-16 py-1 sm:h-20 sm:py-0"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldBlockScroll={false}
    >
      <NavbarContent justify="center" className="min-w-0 gap-2 sm:gap-3">
        <NavbarMenuToggle className="shrink-0 sm:hidden" aria-label="Abrir menú" />
        <div className="flex min-w-0 max-w-[calc(100vw-4.5rem)] items-center gap-2 sm:max-w-none sm:gap-3">
          <NavbarBrand as={Link} href="/" className="!grow-0 !basis-auto shrink-0">
            <CirculoMusicalLogo />
          </NavbarBrand>
          <div className="min-w-0 shrink">{contactBlock}</div>
        </div>
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex gap-4">
        {selectAndButton}
      </NavbarContent>

      {/* Mobile: menú desplegable (altura al contenido vía motionProps) */}
      <NavbarMenu
        className="bottom-auto h-fit min-h-0 gap-4 px-6 pb-5 pt-4"
        motionProps={mobileMenuMotionProps}
      >
        <NavbarMenuItem className="flex w-full flex-col gap-3">
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
        {isHome ? (
          <h1 className={heroTitleClass}>Círculo Musical de Sevilla</h1>
        ) : (
          <p className={heroTitleClass}>Círculo Musical de Sevilla</p>
        )}
        {isHome ? (
          <h2 className="text-2xl font-bold sm:text-2xl">
            Tu escuela de música en Sevilla
          </h2>
        ) : (
          <p className="text-2xl font-bold sm:text-2xl">
            Tu escuela de música en Sevilla
          </p>
        )}
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
