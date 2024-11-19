import { Nav } from "~/components/nav";
import { Menu } from "~/components/ui/DropdownMenu";
import { Logo } from "~/components/logo";
import "~/styles/globals.css";
import { Providers } from "~/red/provider";
import "@radix-ui/themes/styles.css";
import { ThemeToggle } from "~/components/ThemeToggle/ThemeToggle";

export const metadata = {
  title: "Store",
  description: "Created by Olga Khmaruk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="flex justify-between p-2 sm:p-4">
            <Logo />
            <div className="flex flex-wrap gap-2 sm:flex-nowrap sm:gap-4 ">
              <ThemeToggle />
              <div className="hidden sm:flex">
                <Nav />
              </div>
              <div className="flex sm:hidden">
                <Menu />
              </div>
            </div>
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
