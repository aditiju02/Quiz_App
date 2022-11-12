import { Option } from "./Option"

export class Question {
    sno: number
    que: string
    ans: string
    type: string
    option_arr: Option[];
    active: boolean
}