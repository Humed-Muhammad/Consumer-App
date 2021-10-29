import { AuthenticatedStackNavigation as HomeList } from '@Navigation/AuthenticatedSatckNavigation';
import { OrderStackNavigation as Order } from "@Navigation/OrderStackNavigation"
// import OrderList from '@Screen/OrderList';
import Report from '@Screen/Reports';
import Profile from '@Screen/Profile';
import { Icons } from "@Components/Atoms/Icons";



export const screenList: Array<Object> = [
    {
        name: "Home",
        component: HomeList,
        title: "Home",
        Icon: Icons
    },
    {
        name: "My orders",
        component: Order,
        title: "My orders",
        Icon: Icons
    },
    {
        name: "Profile",
        component: Profile,
        title: "Profile",
        Icon: Icons
    },
    {
        name: "Reports",
        component: Report,
        title: "Reports",
        Icon: Icons
    },
]


