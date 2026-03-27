import type { Priority } from "../constants/priority";

export interface UpdataTaskRequestDto {
    title ?: string;
    description ?: string;
    priority ? : Priority;
    deadline ? : string;
}
