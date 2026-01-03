import { lazy, Suspense, useEffect, useState } from "react"
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import { Navbar } from "./components/Navbar.tsx"
import Footer from "./components/Footer"
// Public pages
const Home = lazy(() => import('./pages/Home'))
// const About = lazy(() => import('./pages/About'))
const Team = lazy(() => import('./pages/Team'))
// const Cars = lazy(() => import('./pages/Cars.jsx'))
const Join = lazy(() => import('./pages/Join'))
const Sponsor = lazy(() => import('./pages/Sponsor'))

// const Chassis = lazy(() => import('./pages/join-subpages/Chassis'))
// const Powertrain = lazy(() => import('./pages/join-subpages/Powertrain'))
// const Business = lazy(() => import('./pages/join-subpages/Business'))

export const AppRoutes = () => {    
    return (
        <>
            <Navbar />
            <Suspense fallback={null}>
                    <Routes>
                        {/* public pages */}
                        <Route path="/" element={<Home />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/sponsor" element={<Sponsor />} />
                        <Route path="/join" element={<Join />}/> 

                        {/* <Route path="/about" element={<About />} />
                        <Route path="/cars" element={<Cars />} />
                            <Route path="/join/chassis" element={<Chassis />}/>
                            <Route path="/join/powertrain" element={<Powertrain />}/>
                            <Route path="/join/business" element={<Business />}/> */}

                        {/* the else statement (wow) */}
                        <Route path="*" element={<Navigate to="/" replace/>}/>
                    </Routes>
            </Suspense>   
            <Footer/>
        </>
    )
}
