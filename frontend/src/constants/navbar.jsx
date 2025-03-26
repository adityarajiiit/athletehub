import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { List } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" h-20 mt-0 w-full flex items-center  top-0 fixed z-50 border-b-2 border-muted/30">
      <nav className="w-full flex flex-row items-center justify-between bg-secondary">
        <div className="pl-2 flex flex-row justify-center items-center">
          <h2 className="pl-4 pr-4 font-bold text-accent text-2xl">Logo.</h2>
        </div>
        <div className="flex flex-row w-full justify-center items-center">
          <div className="w-0 h-0 border-l-[3rem] border-l-transparent border-r-[0rem] border-r-transparent border-b-[5rem] border-b-[#192434]"></div>
          <div className="flex flex-row bg-[#192434] w-full h-20 ">
            <ul className="hidden md:flex  flex-row pr-4 items-center justify-center gap-x-4 md:gap-x-5 w-full">
              <Link
                className="text-lg font-semibold text-destructive hover:text-accent-foreground"
                to="/"
              >
                Home
              </Link>
              <NavigationMenu className="z-50">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent  text-[#B6FFFA] font-semibold text-lg focus:text-[#98E4FF]">
                      Career
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="flex flex-col bg-slate-700 ">
                      <NavigationMenuLink className="p-2 text-center text-destructive border-b-2 font-semibold border-slate-300">
                        <Link to="/career">Mentors</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="p-2 text-center text-destructive border-b-2 font-semibold border-slate-300">
                        <Link to="/career">Events</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="p-2 text-center border-b-2 text-destructive font-semibold">
                        <Link to="/career">Users</Link>
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <NavigationMenu className="z-50">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-[#B6FFFA] font-semibold text-lg focus:text-[#98E4FF]">
                      Aids
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="flex flex-col bg-slate-700 ">
                      <NavigationMenuLink className="p-2 text-center text-destructive border-b-2 font-semibold border-slate-300">
                        <Link to="/aid">Medicians</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="p-2 text-center border-b-2 text-destructive font-semibold">
                        <Link to="/aid">Diet plan</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="p-2 text-center border-b-2 text-destructive font-semibold">
                        <Link to="/aid">InjurySync</Link>
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link className="text-lg font-semibold text-destructive hover:text-accent-foreground">
                Progress
              </Link>

              <NavigationMenu className="z-50">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-[#B6FFFA] font-semibold text-lg focus:text-[#98E4FF]">
                      Finance
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="flex flex-col bg-slate-700 ">
                      <NavigationMenuLink className="p-2 text-center text-destructive border-b-2 font-semibold border-slate-300">
                        Budgeting
                      </NavigationMenuLink>
                      <NavigationMenuLink className="p-2 text-center border-b-2 text-destructive font-semibold">
                        Sponsorship
                      </NavigationMenuLink>
                      <NavigationMenuLink className="p-2 text-center border-b-2 text-destructive font-semibold">
                        Fundraise
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link
                className="text-lg font-semibold text-destructive hover:text-accent-foreground "
                to="/chat"
              >
                Chat
              </Link>

              <Link
                className="text-lg font-semibold text-destructive hover:text-accent-foreground"
                to="/profile"
              >
                Profile
              </Link>
            </ul>

            <Sheet>
              <SheetTrigger className="pr-4 md:hidden flex justify-end items-center w-full">
                <List className="stroke-slate-200 h-8 w-8 fill-slate-200" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle></SheetTitle>
                  <SheetDescription className="flex flex-col">
                    <div className="pl-2 flex flex-row  w-full h-24">
                      <h2 className="pl-1 font-bold text-yellow-300 text-lg">
                        ThoughtStream.
                      </h2>
                    </div>
                    <ul className="flex flex-col w-full bg-slate-600"></ul>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
