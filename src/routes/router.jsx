import { createBrowserRouter } from "react-router";
import HomePage from "../pages/home-page/HomePage";
import AppointmentPage from "../pages/appointment-page/AppointmentPage";
import TherapyPage from "../pages/therapy-page/TherapyPage"
import ExpertPage from "../pages/expert-page/ExpertPage"
import QuestionPage from "../pages/question-page/QuestionPage";


const router = createBrowserRouter([
    {
        path:'/',
        element:<HomePage/>
    },
    {
        path:'/appointment',
        element:<AppointmentPage/>
    },
    {
        path:'/therapy',
        element:<TherapyPage/>
    },
    {
        path:'/expert',
        element:<ExpertPage/>
    },
    {
        path:'/question',
        element:<QuestionPage/>
    },
])

export default router