import { Role } from "./role.response"

export interface User{
    id :string
    matricule :string
    username :string
    email :string
    password :string
    telephone :number
    roles:Role[]
    }