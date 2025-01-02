import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

export default function Menu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="hidden sm:list-item">
          <NavigationMenuTrigger>Guides</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-40">
              <li className="text-sm hover:bg-muted/50 p-4">
                <NavigationMenuLink asChild>
                  <a
                    href="https://web.itu.edu.tr/durgunor/ders.htm"
                    target="_blank"
                  >
                    Ders Seçim Rehberi
                  </a>
                </NavigationMenuLink>
              </li>
              <li className="text-sm hover:bg-muted/50 p-4">
                <NavigationMenuLink asChild>
                  <a
                    href="https://web.itu.edu.tr/durgunor/itusch.htm"
                    target="_blank"
                  >
                    Nasıl Kullanılır?
                  </a>
                </NavigationMenuLink>
              </li>
              <li className="text-sm hover:bg-muted/50 p-4">
                <NavigationMenuLink asChild>
                  <a
                    href="https://web.itu.edu.tr/durgunor/crn.html"
                    target="_blank"
                  >
                    Fill CRN Test
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
