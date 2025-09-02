import React, { createContext, useContext, useState } from 'react'
import { post } from './api'

const AuthCtx = createContext(null)

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const t = localStorage.getItem('token')
        const u = localStorage.getItem('user')
        return t && u ? JSON.parse(u) : null
    })

    const login = async (email, password) => {
        const data = await post('/api/auth/login', { email, password })
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        setUser(data.user)
        return data.user
    }

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUser(null)
    }

    return <AuthCtx.Provider value={{ user, login, logout }}>{children}</AuthCtx.Provider>
}

export const useAuth = () => useContext(AuthCtx)
