"use client";
import { Link } from "@nextui-org/link";
import {
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import clsx from "clsx";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
	DiscordIcon,
	GithubIcon,
	LinkedinIcon,
	Logo,
	TwitterIcon,
} from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
	const [navbarMenuOpen, setNavbarMenuOpen] = useState(false);
	const path = usePathname();
	useEffect(() => {
		setNavbarMenuOpen(false);
	}, []);

	return (
		<NextUINavbar
			isMenuOpen={navbarMenuOpen}
			maxWidth="full"
			position="static"
			className="bg-transparent backdrop-blur-sm px-4 sm:px-6 md:px-8"
		>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-2 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="font-semibold text-gray-900 dark:text-white text-lg">
							Luke Anthony
						</p>
					</NextLink>
				</NavbarBrand>
				<ul className="hidden lg:flex gap-3 justify-start ml-4">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium text-sm",
									"data-[active=true]:text-blue-600 dark:data-[active=true]:text-blue-400 data-[active=true]:font-semibold",
								)}
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent 
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-1">
					<Link
						isExternal
						href={siteConfig.links.discord}
						aria-label="Discord"
						className="hover:scale-110 transition-transform duration-200"
					>
						<DiscordIcon className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200" />
					</Link>
					<Link
						isExternal
						href={siteConfig.links.twitter}
						aria-label="Twitter"
						className="hover:scale-110 transition-transform duration-200"
					>
						<TwitterIcon className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200" />
					</Link>
					<Link
						isExternal
						href={siteConfig.links.linkedin}
						aria-label="LinkedIn"
						className="hover:scale-110 transition-transform duration-200"
					>
						<LinkedinIcon className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200" />
					</Link>
					<Link
						isExternal
						href={siteConfig.links.github}
						aria-label="Github"
						className="hover:scale-110 transition-transform duration-200"
					>
						<GithubIcon className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200" />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
				<NavbarMenuToggle
					onClick={() => {
						setNavbarMenuOpen(!navbarMenuOpen);
					}}
					isSelected={navbarMenuOpen}
					className="lg:hidden"
				/>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis pl-2" justify="end">
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle
					onClick={() => {
						setNavbarMenuOpen(!navbarMenuOpen);
					}}
					isSelected={navbarMenuOpen}
				/>
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navItems.map((item) => (
						<NavbarMenuItem key={item.href}>
							<NextLink 
								color="foreground" 
								href={item.href}
								onClick={() => setNavbarMenuOpen(false)}
							>
								{item.label}
							</NextLink>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
