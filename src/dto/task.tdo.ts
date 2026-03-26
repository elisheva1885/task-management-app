import type { Priority } from "../constants/priority";

export interface TaskResponseDto {
    id: string;
    title: string;
    description: string;
    priority : Priority;
    deadline: Date;
}