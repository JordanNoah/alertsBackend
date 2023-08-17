import Institution from "./institution.interface";
import { User } from "./user.interface";

export interface CreateUser {
    institution: Institution;
    fired_at:    Date;
    uuid:        string;
    user:        User;
}