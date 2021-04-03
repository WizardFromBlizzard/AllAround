import { Role, User } from "./models/user";

export const USERS: User[] = [
    {id: 1, username: 'tekila', password: 'aliket', role: Role.USER},
    {id: 2, username: 'admin', password: 'admin', role: Role.ADMIN},
    {id: 1, username: 'srki', password: '123', role: Role.USER}    
]