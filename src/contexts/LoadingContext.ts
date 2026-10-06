import { createContext } from "react";
import type { LoadingContextModel } from "../models/LoadingModel";

export const LoadingContext = createContext<LoadingContextModel | null>(null);
