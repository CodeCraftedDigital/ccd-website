export interface NavigationLink {
  id: number;
  title: string;
  href: string;
}

export const navigationLinks: readonly NavigationLink[] = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About", href: "/about" },
  { id: 3, title: "Solutions", href: "/solutions" },
  { id: 4, title: "Blog", href: "/blog" },
  { id: 5, title: "Our Work", href: "/our-work" },
];
