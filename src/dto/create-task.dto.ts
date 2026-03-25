import type { Priority } from "../constants/Priority";

export interface CreateTaskRequestDto {
    title: string,
    description: string,
    priority : Priority,
    deadline : string;
}