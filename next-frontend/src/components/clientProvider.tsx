'use client';

import React from "react";
import { Provider } from "react-redux";
import { store } from "@/lib/utils/store";

/**
 * Provides the Redux store to its child components.
 *
 * @param children - The React nodes that will have access to the Redux store.
 * @returns The children wrapped with the Redux Provider.
 */
export default function ClientProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
