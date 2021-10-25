import { Cost } from "./cost.model";

export interface Structure{
    id: number;
    name: string;
    expansion: string;
    age: string;
    cost: Cost;
    build_time: number;
    reload_time: number;
    hit_points: number;
    line_of_sight: number;
    range: number;
    attack: number;
    armor: string;
    special: string[];
}