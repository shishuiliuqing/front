import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "@/pages/Layout/Layout";
import Article from "./pages/Article/Article";
import Backend from "./pages/Backend/Backend";
import ArticleEditor from "./pages/ArticleEditor/ArticleEditor";
import Login from "./pages/Login/Login";
import ArticleList from "./pages/ArticleList/ArticleList";
import Welcome from "./pages/Welcome/Welcome";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'article/:id',
                element: <Article></Article>
            }
        ]
    },
    {
        path: '/backend',
        element: <Backend />,
        children: [
            {
                index: true,
                element: <Welcome />
            },
            {
                path: 'articleEditor',
                element: <ArticleEditor />
            },
            {
                path: 'articleList',
                element: <ArticleList />
            },
        ]
    },
    {
        path: '/login',
        element: <Login />,
    }
])

export default router