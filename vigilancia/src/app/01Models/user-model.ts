export interface user{
    id: number;

    usuario: string;
    correo: string;
    contraseña: string;
}

export interface loginForm{
    correo: string;
    contraseña: string;
}