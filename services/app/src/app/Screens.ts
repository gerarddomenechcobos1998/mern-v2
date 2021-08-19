import CreateScreen from '../pages/Create';
import ViewScreen from '../pages/View';
import HomeScreen from '../pages/Home';
import UpdateScreen from '../pages/Update';

export const Screens = [
    {
        name:'home',
        component: HomeScreen,
        requierAuth: "user"
    },
    {
        name: "create",
        component: CreateScreen,
        requireAuth: "user"
    },
    {
        name: "view",
        component: ViewScreen,
        requireAuth: "user"
    },
    {
        name: "update",
        component: UpdateScreen,
        requireAuth:"user"
    }
]
