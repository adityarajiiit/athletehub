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
          <div className="w-0 h-0 border-l-[3rem] border-l-transparent border-r-[0rem] border-r-transparent border-b-[5rem] border-b-[#131d2b]"></div>
          <div className="flex flex-row bg-[#131d2b] w-full h-20 ">
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
                    <NavigationMenuTrigger className="bg-transparent  text-white font-semibold text-lg focus:text-destructive">
                      Career
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="flex p-1 flex-col bg-black pr-[5px]">
                      <NavigationMenuLink className="p-2 text-start text-destructive  font-semibold bg-white/10 mb-[1px] hover:bg-white/20">
                        <Link to="/career">Mentors</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="p-2 text-start text-destructive  font-semibold bg-white/10 mb-[1px] hover:bg-white/20">
                        <Link to="/career">Events</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="p-2 text-start  text-destructive font-semibold  bg-white/10 mb-[1px] hover:bg-white/20">
                        <Link to="/career">Users</Link>
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <NavigationMenu className="z-50">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-white font-semibold text-lg focus:text-destructive">
                      Aids
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="flex flex-col bg-black p-1 ">
                      <NavigationMenuLink className="p-2 text-start text-destructive  font-semibold bg-white/10 mb-[1px] hover:bg-white/20">
                        <Link to="/aid">Medicians</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="p-2 text-start  text-destructive font-semibold bg-white/10 mb-[1px] hover:bg-white/20">
                        <Link to="/aid">Diet plan</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="p-2 text-start  text-destructive font-semibold bg-white/10 mb-[1px] hover:bg-white/20">
                        <Link to="/aid">Injury & illness</Link>
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
                    <NavigationMenuTrigger className="bg-transparent text-white font-semibold text-lg focus:text-destructive">
                      Finance
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="flex flex-col bg-black p-1 pr-[6px]">
                      <Link
                        to="/finance"
                        className="p-2 text-start text-destructive  font-semibold bg-white/10 mb-[1px] hover:bg-white/20"
                      >
                        {" "}
                        <NavigationMenuLink>Budgeting</NavigationMenuLink>
                      </Link>
                      <Link
                        to="/finance"
                        className="p-2 text-start text-destructive  font-semibold bg-white/10 mb-[1px] hover:bg-white/20"
                      >
                        {" "}
                        <NavigationMenuLink>Sponsorship</NavigationMenuLink>
                      </Link>
                      <Link
                        to="/finance"
                        className="p-2 text-start text-destructive  font-semibold bg-white/10 mb-[1px] hover:bg-white/20"
                      >
                        {" "}
                        <NavigationMenuLink>Fundraise</NavigationMenuLink>
                      </Link>
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
