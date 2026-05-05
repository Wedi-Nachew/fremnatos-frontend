import Header from "./components/Header";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import OurStory from "./pages/OurStory";
import BranchDetail from "./pages/BranchDetail";
import Gallery from "./pages/Gallery";
import ChildrenCareProgram from "./pages/ChildrenCareProgram";
import ElderlyCareProgram from "./pages/ElderlyCareProgram";
import MentalHealthRecoveryProgram from "./pages/MentalHealthRecoveryProgram";
import OurImpact from "./pages/OurImpact";
import NewsAndEventsPage from "./pages/NewsAndEventsPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import Sustainability from "./pages/Sustainability";
import GetInvolved from "./pages/GetInvolved";
import VolunteerPage from "./pages/VolunteerPage";
import MembershipPage from "./pages/MembershipPage";
import PartnershipsPage from "./pages/PartnershipsPage";
import FundraisingPage from "./pages/FundraisingPage";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";
import DonatePage from "./pages/DonatePage";

const App = () => {
    const [showStickyHeader, setShowStickyHeader] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.getElementById("hero-section");

            if (!heroSection) {
                setShowStickyHeader(true);
                return;
            }

            const { bottom } = heroSection.getBoundingClientRect();
            setShowStickyHeader(bottom <= 0);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [location.pathname]);

    return (
        <>
            <ScrollToTop />
            <Header showStickyHeader={showStickyHeader} />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/our-story" element={<OurStory />} />
                <Route path="/our-impact" element={<OurImpact />} />
                <Route
                    path="/news-and-events"
                    element={<NewsAndEventsPage />}
                />
                <Route
                    path="/news-and-events/:newsId"
                    element={<NewsDetailPage />}
                />
                <Route path="/sustainability" element={<Sustainability />} />
                <Route path="/substainability" element={<Sustainability />} />
                <Route path="/get-involved" element={<GetInvolved />} />
                <Route
                    path="/get-involved/volunteer"
                    element={<VolunteerPage />}
                />
                <Route
                    path="/get-involved/membership"
                    element={<MembershipPage />}
                />
                <Route
                    path="/get-involved/partnerships"
                    element={<PartnershipsPage />}
                />
                <Route
                    path="/get-involved/fundraising"
                    element={<FundraisingPage />}
                />
                <Route path="/gallery" element={<Gallery />} />
                <Route
                    path="/our-programs/children-care"
                    element={<ChildrenCareProgram />}
                />
                <Route
                    path="/our-programs/elderly-care"
                    element={<ElderlyCareProgram />}
                />
                <Route
                    path="/our-programs/mental-health-recovery"
                    element={<MentalHealthRecoveryProgram />}
                />
                <Route
                    path="/our-programs/mentally-distressed-care"
                    element={<MentalHealthRecoveryProgram />}
                />
                <Route
                    path="/our-branches/:branchSlug"
                    element={<BranchDetail />}
                />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/donate" element={<DonatePage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
