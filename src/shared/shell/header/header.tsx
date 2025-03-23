"use client";
import { useState } from "react";
import {
  Box,
  Group,
  Menu,
  Button,
  Drawer,
  Select,
  Burger,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "../../../utilities/locale-provider";
import Image from "next/image";
import { menuItems } from "@/app/config/menu";
import DarkModeToggle from "@/utilities/dark-mode-toggle";


export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const pathname = usePathname();
  const { locale, setLocale, t } = useLocale();

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
                width={32}
                height={32}
                className="rounded-lg shadow-md"
              />
            </div>
            <Title order={1} size="h4" fw={900} className="text-white text-sm">
              GRAND-LALIBELA ENTERPRISE
            </Title>
          </Box>

          {/* Desktop Navigation with Dropdown */}
          <Group
            h="100%"
            gap={0}
            className="hidden md:flex font-semibold text-lg"
          >
            {menuItems.map((item) =>
              item.subMenu ? (
                <Menu
                  key={item.label}
                  trigger="hover"
                  openDelay={100}
                  closeDelay={100}
                  position="bottom-start"
                  offset={24}
                  shadow="md"
                >
                  <Menu.Target>
                    <Box className="text-white">{t(item.label)}</Box>
                  </Menu.Target>
                  <Menu.Dropdown>
                    {item.subMenu.map((subItem) =>
                      subItem.subMenu ? (
                        <Menu
                          key={subItem.label}
                          trigger="hover"
                          openDelay={100}
                          closeDelay={100}
                          position="right-start"
                          offset={0}
                          shadow="md"
                        >
                          <Menu.Target>
                            <Menu.Item>{t(subItem.label)}</Menu.Item>
                          </Menu.Target>
                          <Menu.Dropdown>
                            {subItem.subMenu.map((nestedItem) => (
                              <Menu.Item
                                key={nestedItem.label}
                                component={Link}
                                href={nestedItem.url}
                              >
                                {t(nestedItem.label)}
                              </Menu.Item>
                            ))}
                          </Menu.Dropdown>
                        </Menu>
                      ) : (
                        <Menu.Item
                          key={subItem.label}
                          component={Link}
                          href={subItem.url}
                        >
                          {t(subItem.label)}
                        </Menu.Item>
                      )
                    )}
                  </Menu.Dropdown>
                </Menu>
              ) : (
                <Link
                  key={item.label}
                  href={item.url}
                  className={`px-4 py-2 ${isActive(item.url)}`}
                >
                  {t(item.label)}
                </Link>
              )
            )}
          </Group>

          {/* Right Actions */}
          <Group className="hidden md:flex">
            <Select
              data={[
                { value: "en", label: "English" },
                { value: "am", label: "አማርኛ" },
              ]}
              value={locale}
              onChange={(val) => setLocale(val as "en" | "am")}
              classNames={{
                input: "w-28 bg-white dark:bg-gray-900 dark:text-white",
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
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.url}
              className={`text-lg py-2 ${isActive(item.url)}`}
              onClick={closeDrawer}
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>
      </Drawer>
    </Box>
  );
}
