// import profileImg from "@/assets/images/logo.png";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { getLenisInstance } from "@/lib/lenis";

export default function NavbarComponent() {
    const navItems = [
        {
            name: "Work",
            link: "#work",
        },
        {
            name: "Experience",
            link: "#experience",
        },
        {
            name: "About",
            link: "#about",
        },
        {
            name: "Interests",
            link: "#interests",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Smooth scroll handler using Lenis
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
        if (link.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(link);
            if (target) {
                const lenis = getLenisInstance();
                lenis.scrollTo(target as HTMLElement, { offset: -200 });
            }
        }
    };

    return (
        <Navbar className="fixed top-5 md:top-12 z-50 w-full bg-transparent">
            {/* Desktop Navigation */}
            <NavBody>
                {/* <img src={profileImg} alt="logo" className="size-8 rounded-full" />
                 */}
                 <p className="text-white font-switzer font-semibold px-2">IHWA</p>
                <NavItems
                    items={navItems}
                    onItemClick={(e, link) => handleSmoothScroll(e, link)}
                />
                <div className="flex items-center gap-4">
                    <NavbarButton href="#contact"
                        as="a"
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                            handleSmoothScroll(e, '#contact');
                            setIsMobileMenuOpen(false);
                        }} variant="secondary" className="rounded-full bg-white">Contact</NavbarButton>
                </div>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
                <MobileNavHeader>
                    <p className="text-white font-switzer font-semibold px-4 py-3">IHWA</p>
                    <MobileNavToggle
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </MobileNavHeader>

                <MobileNavMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                >
                    {navItems.map((item, idx) => (
                        <a
                            key={`mobile-link-${idx}`}
                            href={item.link}
                            onClick={e => {
                                handleSmoothScroll(e, item.link);
                                setIsMobileMenuOpen(false);
                            }}
                            className="relative text-white!"
                        >
                            <span className="block">{item.name}</span>
                        </a>
                    ))}
                    <div className="flex w-full flex-col gap-4">
                        <NavbarButton
                            href="#contact"
                            as="a"
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                handleSmoothScroll(e, '#contact');
                                setIsMobileMenuOpen(false);
                            }}
                            variant="primary"
                            className="w-full"
                        >
                            Contact
                        </NavbarButton>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    );
}

