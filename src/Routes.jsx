import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import RegisterPageColoured from "./pages/RegisterPageColoured";
import LoginPageColoured from "./pages/LoginPageColoured";
import HomePageColoured from "./pages/HomePageColoured";
import ProjectsColored from "./pages/ProjectsColored";
import GISIntegrationWindowColored from "./pages/GISIntegrationWindowColored";
import AboutUsColored from "./pages/AboutUsColored";
import ContactUs from "./pages/ContactUs";
import Survey from "./pages/Survey";
import UserInfo from "./pages/UserInfo";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute";
import MoreInfoPageForAProjectPrevFwcards from "./components/MoreInfoPageForAProjectPrevFwcards/MoreInfoPageForAProjectPrev";
import UpcomingEvents from "./pages/UpcomingEvents/UpcomingEvents";
import ProjectDetailsPage from "./pages/ProjectsColored/ProjectDetail";
import { ContractorPortal } from "./pages/ContractorPortal/ContractorPortal";


const ProjectRoutes = () => {
    let element = useRoutes([
        { path: "/", element: <LoginPageColoured /> },
        { path: "*", element: <NotFound /> },
        { path: "/register", element: <RegisterPageColoured /> },
        { path: "/Home", element: <HomePageColoured /> },
        { path: "/projects", element: <ProjectsColored /> },
        {
            path: "/project-info",
            element: <ProtectedRoute element={<MoreInfoPageForAProjectPrevFwcards />} />,
        },
        {
            path: "/gis-integration",
            element: <ProtectedRoute element={<GISIntegrationWindowColored />} />,
        },
        {
            path: "/about",
            element: <ProtectedRoute element={<AboutUsColored />} />,
        },
        { path: "/contact", element: <ContactUs /> },
        { path: "/survey", element: <Survey /> },
        {path:'/upcomingevents',element:<UpcomingEvents/>},
        {
            path: "/profile",
            element: <ProtectedRoute element={<UserInfo />} />,
        },
        {
            path: "/project/:id",
            element: <ProtectedRoute element={<ProjectDetailsPage />} />,
        },
        { path: "/contractorportal", element: <ContractorPortal /> },
    ]);
    return element;
};

export default ProjectRoutes;
