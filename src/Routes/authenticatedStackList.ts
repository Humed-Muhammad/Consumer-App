import Home from '@Screen/Home';
import Pickup from '@Screen/Pickup';
import Dropoff from '@Screen/Dropoff';
import Summery from '@Screen/Summery';

export const screenList: Array<Object> = [
    {
        name: "Root",
        component: Home,
        title: "Home"
    },
    {
        name: "Pickup",
        component: Pickup,
        title: "Pickup Location"
    },
    {
        name: "Drop-off",
        component: Dropoff,
        title: "Drop-off Location"
    },
    {
        name: "summery",
        component: Summery,
        title: "Summery"
    },
]


