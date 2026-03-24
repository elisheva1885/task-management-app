export interface RegisterRequestDto {
    username: string;
    password: string;
}

export interface RegisterResponseDto {
    id: string;
    username: string;
}

export interface LoginRequestDto {
    username: string;
    password: string;
}