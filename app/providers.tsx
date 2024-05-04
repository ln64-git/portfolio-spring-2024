"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useTheme } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Vortex } from "@/components/vortex";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <Vortex
          baseRadius={2}
          backgroundColor={"transparent"}
          rangeY={800}
          particleCount={35}
          baseHue={130}
          className="flex flex-col w-full h-full"
        >
          {children}
        </Vortex>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
