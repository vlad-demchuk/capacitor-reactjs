import { createContext } from 'react'
import type { UserContext as IUserContext } from "@/features/user/types"

export const UserContext = createContext<IUserContext | null>(null)
