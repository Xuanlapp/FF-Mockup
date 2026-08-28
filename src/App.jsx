import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import MockupPage from './pages/MockupPage'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/mockup" element={<MockupPage />} />
        <Route path="*" element={<Navigate to="/mockup" replace />} />
      </Route>
    </Routes>
  )
}

export default function App() {
  const Router =
    typeof window !== 'undefined' && window.location.protocol === 'file:'
      ? HashRouter
      : BrowserRouter

  return <Router><AppRoutes /></Router>
}
