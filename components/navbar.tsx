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
	useEffect(() => {
		setNavbarMenuOpen(false);
	}, []);

	return (
		<div className="w-full bg-transparent backdrop-blur-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
				<NextUINavbar
					isMenuOpen={navbarMenuOpen}
					maxWidth="full"
					position="static"
					className="bg-transparent"
				>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-2 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="font-semibold text-foreground text-lg">
							Luke Anthony
						</p>
					</NextLink>
				</NavbarBrand>
				<ul className="hidden lg:flex gap-1 justify-start ml-4">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									"text-muted-foreground hover:text-foreground transition-all duration-300 font-medium text-sm px-3 py-2 rounded-full",
									"hover:scale-105",
									"data-[active=true]:text-primary data-[active=true]:font-semibold data-[active=true]:bg-primary/10 data-[active=true]:scale-105",
									"group relative overflow-hidden"
								)}
								href={item.href}
							>
								<span className="relative z-10">{item.label}</span>
								<div className="absolute inset-0 rounded-lg bg-content1/60 dark:bg-content1/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
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
						<DiscordIcon className="text-muted-foreground hover:text-foreground transition-colors duration-200" />
					</Link>
					<Link
						isExternal
						href={siteConfig.links.twitter}
						aria-label="Twitter"
						className="hover:scale-110 transition-transform duration-200"
					>
						<TwitterIcon className="text-muted-foreground hover:text-foreground transition-colors duration-200" />
					</Link>
					<Link
						isExternal
						href={siteConfig.links.linkedin}
						aria-label="LinkedIn"
						className="hover:scale-110 transition-transform duration-200"
					>
						<LinkedinIcon className="text-muted-foreground hover:text-foreground transition-colors duration-200" />
					</Link>
					<Link
						isExternal
						href={siteConfig.links.github}
						aria-label="Github"
						className="hover:scale-110 transition-transform duration-200"
					>
						<GithubIcon className="text-muted-foreground hover:text-foreground transition-colors duration-200" />
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
				<div className="mx-4 mt-2 flex flex-col gap-1">
					{siteConfig.navItems.map((item) => (
						<NavbarMenuItem key={item.href}>
							<NextLink 
								className="text-muted-foreground hover:text-foreground transition-all duration-300 font-medium text-sm px-3 py-2 rounded-full hover:scale-105 group relative overflow-hidden"
								href={item.href}
								onClick={() => setNavbarMenuOpen(false)}
							>
								<span className="relative z-10">{item.label}</span>
								<div className="absolute inset-0 rounded-full bg-content1/60 dark:bg-content1/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
							</NextLink>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
				</NextUINavbar>
			</div>
		</div>
	);
};
