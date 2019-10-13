import { login, dashboard, E404 } from "../../resources/views";
  
const routes = [
    {
        path: "/",
        exact: true,
        component: login
    },
    {
        path: "/dashboard",
        component: dashboard,
        routes: [
            {
                path: "/dashboard",
                exact: true,
                component: dashboard
            },
            {
                path: "/cpanel/dashboard",
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