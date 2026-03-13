import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Buy from './pages/Buy';
import PropertyDetails from './pages/PropertyDetails';
import Advisors from './pages/Advisors';
import Conciergerie from './pages/Conciergerie';
import ConciergerieExpertises from './pages/ConciergerieExpertises';
import Journal from './pages/Journal';
import JournalPost from './pages/JournalPost';
import Sell from './pages/Sell';
import Discover from './pages/Discover';
import Join from './pages/Join';
import Contact from './pages/Contact';
import LegalMentions from './pages/LegalMentions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Cookies from './pages/Cookies';

// ScrollToTop Component
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

// Animated Routes Component to use useLocation
const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/buy" element={<Buy />} />
                <Route path="/property/:id" element={<PropertyDetails />} />
                <Route path="/advisors" element={<Advisors />} />
                <Route path="/conciergerie" element={<Conciergerie />} />
                <Route path="/conciergerie/expertises" element={<ConciergerieExpertises />} />
                <Route path="/journal" element={<Journal />} />
                <Route path="/journal/:id" element={<JournalPost />} />
                <Route path="/sell" element={<Sell />} />
                <Route path="/discover" element={<Discover />} />
                <Route path="/join" element={<Join />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/mentions-legales" element={<LegalMentions />} />
                <Route path="/confidentialite" element={<PrivacyPolicy />} />
                <Route path="/cookies" element={<Cookies />} />
            </Routes>
        </AnimatePresence>
    );
};

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="noise-overlay"></div>
            <div className="App flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <AnimatedRoutes />
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
