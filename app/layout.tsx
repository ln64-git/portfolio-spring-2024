import "@/styles/globals.css";
import clsx from "clsx";
import type { Metadata, Viewport } from "next";
import { AuroraBackground } from "@/components/aurora-background";
import { Navbar } from "@/components/navbar";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { Providers } from "./providers";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable,
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative min-h-screen ">
						<AuroraBackground className="">
							{/* <ScrollShadow hideScrollBar  size={50}> */}
							<div className="relative z-10">
								<Navbar />
								<main className="w-full flex-grow">{children}</main>
							</div>
							{/* </ScrollShadow> */}
						</AuroraBackground>
					</div>
				</Providers>
			</body>
		</html>
	);
}
