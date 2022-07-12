import { HomeIcon, NotesIcon, ProjectsIcon, ContactIcon } from "../../_common/components/Icons";
import type { MenuItemProps } from "../../_common/components/MenuItem";


export const menuItems: MenuItemProps[] = [
  {
    icon: HomeIcon,
    text: "Home",
    href: "/",
  },
  {
    icon: NotesIcon,
    text: "Notes",
    href: "/notes",
  },
  {
    icon: ProjectsIcon,
    text: "Projects",
    href: "/projects",
  },
  {
    icon: ContactIcon,
    text: "Contact",
    href: "/contact",
  },
];
