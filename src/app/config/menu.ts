import { MenuItem } from "@/shared/shell/models/menu-config";

export const menuItems: MenuItem[] = [
  { label: "Home", url: "/" },
  {
    label: "About Us",
    url: "/about",
  },
  {
    label: "Services",
    url: "/services",
    subMenu: [
      {
        label: "Web Development",
        url: "/services/web-development",
        subMenu: [
          { label: "Frontend", url: "/services/web-development/frontend" },
          { label: "Backend", url: "/services/web-development/backend" },
        ],
      },
      {
        label: "Mobile Development",
        url: "/services/mobile-development",
      },
    ],
  },
  {
    label: "Products",
    url: "/product",
  },
  {
    label: "Excellences",
    url: "/excellence",
  },
  {
    label: "Contact Us",
    url: "/contact",
  },
  {
    label: "News",
    url: "/new",
  },
];
