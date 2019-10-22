import { login, start, dashboard, profile, format, E404 } from "../../resources/views";
  
const routes = [
    {
        path: "/",
        exact: true,
        component: login
    },
    {
        path: "/dashboard",
        component: start,
        routes: [
            {
                path: "/dashboard",
                exact: true,
                component: dashboard
            },
            {
                path: "/dashboard/format",
                exact: true,
                component: format
            },
            {
                path: "/dashboard/profile",
                exact: true,
                component: profile
            },
            {
                path: "/dashboard/user",
                exact: true,
                component: dashboard
            },
            {
                path: false,
                component: E404
            }

      ]
    },
    {
        path: false,
        exact: false,
        component: E404
    }
    
  ];
export default routes;