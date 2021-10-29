import { useSelector } from "react-redux"


export const colorSelector = (value) => {
    let { color }: any = useSelector((state: any) => state.color)
    return color[value]
}