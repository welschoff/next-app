"use client";
import { CountryList } from "./components/CountryList";

import { NextUIProvider } from "@nextui-org/react";

export default async function Home() {
  return (
    <NextUIProvider>
      <CountryList />
    </NextUIProvider>
  );
}
