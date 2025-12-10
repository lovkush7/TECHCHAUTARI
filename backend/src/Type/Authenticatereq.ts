import type { Request } from "express";

export type AuthenticateRequest = Request &{
    user?:{
        id: string
    }
}