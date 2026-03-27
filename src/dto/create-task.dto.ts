import type { Priority } from "../constants/priority";

export interface CreateTaskRequestDto {
    title: string,
    description: string,
    priority : Priority,
    deadline : string;
}