"use client";
import { useState, useEffect } from "react";
import { IconHexagonLetterS } from "@tabler/icons-react";
import {
  Box,
  Burger,
  Button,
  Drawer,
  Group,
  Select,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkModeToggle from "../../../utilities/dark-mode-toggle";
import { useLocale } from "../../../utilities/locale-provider";
import Image from "next/image";

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const theme = useMantineTheme();
  const pathname = usePathname();
  const { t } = useLocale();
  const { locale, setLocale } = useLocale(); // Use locale context

  const isActive = (path: string) =>
    pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-900 dark:text-white";

  return (
    <Box pb={12}>
      <header className="bg-[#008577] text-white dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
        <Group justify="space-between" h="100%" className="px-6 md:px-36 py-4">
          {/* Logo */}
          <Box className="flex items-center space-x-2 select-none">
            <div className="flex items-center justify-center">
              <Image
                src="/grandlal.png"
                alt="Grand Lalibela Enterprise Logo"
                width={40}
                height={40}
                className="rounded-lg shadow-md"
              />
            </div>
              <h1 className="text-4xl text-white font-black">
                {"Grand Lalibela Enterprise"}
              </h1>
          </Box>

          {/* Desktop Navigation */}
          <Group
            h="100%"
            gap={0}
            className="hidden md:flex font-semibold text-lg"
          >
            <Link
              href="/"
              className={`px-4 py-2 hover:text-blue-500 ${isActive("/")}`}
            >
              {t("Home")}
            </Link>
            {["About", "Services", "Products", "Excellence",  "Contact Us", "News"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                className={`px-4 py-2 hover:text-blue-500 ${isActive(
                  `/${item.toLowerCase().replace(/\s/g, "-")}`
                )}`}
              >
                {t(item)}
              </Link>
            ))}
          </Group>

          {/* Right Actions */}
          <Group className="hidden md:flex">
            <Select
              data={[
                { value: "en", label: "English" },
                { value: "am", label: "አማርኛ" },
              ]}
              value={locale} // Bind to context locale
              onChange={(val) => setLocale(val as "en" | "am")}
              classNames={{
                input: "w-28 bg-white dark:bg-gray-900 dark:text-white",
                dropdown: "dark:bg-gray-800 dark:text-white",
                option: "dark:hover:bg-gray-700 dark:hover:text-white",
              }}
            />
            <DarkModeToggle />
          </Group>

          {/* Mobile Menu Button */}
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className="md:hidden"
          />
        </Group>
      </header>

      {/* Mobile Drawer */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        padding="md"
        size="80%"
        className="md:hidden"
      >
        <nav className="flex flex-col space-y-4">
          <Link
            href="/"
            className={`text-lg py-2 ${isActive("/")}`}
            onClick={closeDrawer}
          >
            Home
          </Link>
          {["About Us", "Services", "Portfolio", "Contact Us"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/\s/g, "-")}`}
              className={`text-lg py-2 ${isActive(
                `/${item.toLowerCase().replace(/\s/g, "-")}`
              )}`}
              onClick={closeDrawer}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="mt-6 flex flex-col space-y-4">
          <Select
            data={[
              { value: "en", label: "English" },
              { value: "am", label: "Amharic" },
            ]}
            value={locale} // Bind to context locale
            onChange={(val) => setLocale(val as "en" | "am")}
            classNames={{
              input: "w-full bg-white dark:bg-gray-900 dark:text-white",
            }}
          />
          <DarkModeToggle />
        </div>
      </Drawer>
    </Box>
  );
}
