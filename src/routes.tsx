import { lazy, Suspense, useEffect, useState } from "react"
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import { Navbar } from "./components/Navbar"
import { useLoading } from "./hooks/LoadingContext"
import Footer from "./components/Footer"
// Public pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Team = lazy(() => import('./pages/Team'))
const Cars = lazy(() => import('./pages/Cars'))
const Join = lazy(() => import('./pages/Join'))
const Sponsors = lazy(() => import('./pages/Sponsors'))

const Chassis = lazy(() => import('./pages/join-subpages/Chassis'))
const Powertrain = lazy(() => import('./pages/join-subpages/Powertrain'))
const Business = lazy(() => import('./pages/join-subpages/Business'))


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
                    <Route path="/join" element={<Join />}/> 
                        <Route path="/join/chassis" element={<Chassis />}/>
                        <Route path="/join/powertrain" element={<Powertrain />}/>
                        <Route path="/join/business" element={<Business />}/>

                    {/* the else statement (wow) */}
                    <Route path="*" element={<Navigate to="/" replace/>}/>
                </Routes>
            </Suspense>   
            <Footer/>
        </>
    )
}
