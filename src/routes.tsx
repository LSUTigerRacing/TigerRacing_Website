import { lazy, Suspense, useEffect, useState } from "react"
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import { Navbar } from "./components/Navbar.tsx"
import Footer from "./components/Footer"
// Public pages
const Home = lazy(() => import('./pages/Home'))
const Team = lazy(() => import('./pages/Team'))
const Join = lazy(() => import('./pages/Join'))
const Sponsor = lazy(() => import('./pages/Sponsor'))
const Cars = lazy(() => import('./pages/Cars'))

const Chassis = lazy(() => import('./pages/System-Pages/Chassis'))
const Powertrain = lazy(() => import('./pages/System-Pages/Powertrain'))
const Business = lazy(() => import('./pages/System-Pages/Business'))
const PublicRelations = lazy(() => import('./pages/System-Pages/PublicRelations'))
const Software = lazy(() => import('./pages/System-Pages/Software'))


export const AppRoutes = () => {    
    return (
        <>
            <Navbar />
            <Suspense fallback={null}>
                    <Routes>
                        {/* public pages */}
                        <Route path="/" element={<Home />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/cars" element={<Cars />}/> 
                        <Route path="/sponsor" element={<Sponsor />} />
                        <Route path="/join" element={<Join />}/> 

                        {/* subpages */}
                        <Route path="/join/chassis" element={<Chassis />}/>
                        <Route path="/join/powertrain" element={<Powertrain />}/>
                        <Route path="/join/business" element={<Business />}/>
                        <Route path="/join/public-relations" element={<PublicRelations />}/>
                        <Route path="/join/software" element={<Software />}/>

                        {/* the else statement (wow) */}
                        <Route path="*" element={<Navigate to="/" replace/>}/>
                    </Routes>
            </Suspense>   
            <Footer/>
        </>
    )
}
