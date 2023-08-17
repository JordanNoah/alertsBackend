import { CreateUser } from "./interfaces/createuser.interface";
import { getInstitution } from "../services/institution.service";
import { createUserService, deleteUserService, getUserByExternalIdService } from "../services/user.service";
import { UserResult, eventUser } from "./interfaces/user.interface";
import { deleteCourse } from "./interfaces/course.interface";
import { deleteCourse } from "./course.processor";

export async function createUser (payload:CreateUser): Promise<void> {
    var institution = await getInstitution(payload.institution)

    if (!institution) {
        throw Error('insititution not found')
    }

    const userDestiny:UserResult = {
        externalId:payload.user.id,
        fullName: `${payload.user.firstname} ${payload.user.lastname}`,
        institutionId:institution.id,
        userName:payload.user.username
    } 
    
    var [user,created] = await createUserService(userDestiny,institution.id);
    
}

export async function updateUser (payload:eventUser): Promise<void> {
    var institution = await getInstitution(payload.institution)

    if(!institution) {
        throw Error('insititution not found')
    }

    const userDestiny:UserResult = {
        externalId: payload.user.id,
        fullName: `${payload.user.firstname} ${payload.user.lastname}`,
        institutionId: institution.id,
        userName: payload.user.username
    }

    var existRecord = await getUserByExternalIdService(userDestiny.externalId,userDestiny.institutionId)

    if(existRecord){
        await existRecord.update(userDestiny)
    }else{
        await createUserService(userDestiny,institution.id)
    }
}

export async function deleteUser (payload: deleteCourse): Promise<void> {
    var institution = await getInstitution(payload.institution)

    if (!institution) {
        throw Error('insititution not found')
    }

    await deleteUserService(payload.course_id,institution.id)
}