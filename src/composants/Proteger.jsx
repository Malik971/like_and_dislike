import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Proteger({estProteger, children}) {
    if (!estProteger) return <Navigate to="/" />
  return (
    <>{children}</>
  )
}
