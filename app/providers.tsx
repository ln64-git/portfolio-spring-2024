"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useTheme } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Vortex } from "@/components/vortex";
import { AuroraBackground } from "@/components/aurora-background";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        {/* <Vortex
          backgroundColor={"transparent"}

          baseHue={130}
          className="flex flex-col w-full h-full"
        > */}
        <AuroraBackground>{children}</AuroraBackground>
        {/* </Vortex> */}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
