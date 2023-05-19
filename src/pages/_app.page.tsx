import { globalStyles } from "../styles/globals";

globalStyles();

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/libs/react-query";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
