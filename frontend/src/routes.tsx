import { lazy, Suspense, useEffect, useState } from "react"
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import { Navbar } from "./components/Navbar"
import { useLoading } from "./hooks/GlobalContext"
// Public pages
const Home = lazy(() => import('./pages/public/Home'))
const About = lazy(() => import('./pages/public/About'))
const Team = lazy(() => import('./pages/public/Team'))
const Cars = lazy(() => import('./pages/public/Cars'))
const Join = lazy(() => import('./pages/public/Join'))
const Sponsors = lazy(() => import('./pages/public/Sponsors'))

// Member pages
const Dashboard = lazy(() => import('./pages/member/Dashboard'))

export const AppRoutes = () => {
    const { startLoading, finishLoading } = useLoading();
    const location = useLocation();
    const [prevLocation, setPrevLocation] = useState(location);

    useEffect(() => {
        if (location.pathname !== prevLocation.pathname) {
            startLoading();
            setPrevLocation(location);
        }
    }, [location, prevLocation, startLoading]);

    return (
        <>
            <Navbar />
            <Suspense fallback={null}>
                <Routes>
                    {/* public pages */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/cars" element={<Cars />} />
                    <Route path="/sponsors" element={<Sponsors />} />
                    <Route path="/join" element={<Join />} />

                    {/* protected pages*/}
                    <Route path="/dashboard" element={<Dashboard />} />

                    {/* the else statement (wow) */}
                    <Route path="*" element={<Navigate to="/" replace/>}/>
                </Routes>
            </Suspense>   
        </>
    )
}
