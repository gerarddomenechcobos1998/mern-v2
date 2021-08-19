import CreateScreen from '../pages/Create';
import ViewScreen from '../pages/View';
import HomeScreen from '../pages/Home';
import UpdateScreen from '../pages/Update';

const Screens = [
    {
        name:'home',
        component: HomeScreen,
        requierAuthLevel: ["user"]
    },
    {
        name: "create",
        component: CreateScreen,
        requierAuthLevel: ["user"]
    },
    {
        name: "view",
        component: ViewScreen,
        requierAuthLevel: ["user"]
    },
    {
        name: "update",
        component: UpdateScreen,
        requierAuthLevel:["user"]
    }
]
export default Screens;
