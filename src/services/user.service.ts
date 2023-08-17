import {UserResult} from "../processors/interfaces/user.interface";
import { User as UserModel } from "../config/db/models";
import Institution from "../processors/interfaces/institution.interface";
const createUserService = async (user:UserResult,institutionId:number) => {
    return await UserModel.findOrCreate({
        defaults:{
            externalId:user.externalId,
            fullName:user.fullName,
            institutionId:user.institutionId,
            userName:user.userName
        },
        where:{
            externalId:user.externalId,
            institutionId:institutionId
        }
    });
}

const getUserByExternalIdService = async (userId:number,institutionId:number) => {
    return await UserModel.findOne({
        where:{
            externalId:userId,
            institutionId:institutionId
        }
    })
}

const getUserByUsernameService = async (user:UserResult) => {
    return await UserModel.findOne({
        where:{
            userName: user.userName,
            institutionId: user.externalId
        }
    })
}

const deleteUserService = async (courseId:number, institutionId: number) => {
    const course = await UserModel.findOne({
        where:{
            externalId:courseId,
            institutionId:institutionId
        }
    })

    if (course) {
        await course.destroy()
    }

    return course
}

export {
    createUserService,
    getUserByExternalIdService,
    getUserByUsernameService,
    deleteUserService
}