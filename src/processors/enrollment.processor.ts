import { existCourseService } from "../services/course.service";
import { createEnrollmentService } from "../services/enrollment.service";
import { getInstitution } from "../services/institution.service";
import { getUserByExternalIdService } from "../services/user.service";
import { enrollmentResult, eventDeleteEnrollment, eventEnrollment } from "./interfaces/enrollment.interface";

export async function createEnrollment(payload:eventEnrollment): Promise<void> {
    
    var institution = await getInstitution(payload.institution)

    if (!institution) {
        throw Error('insititution not found')
    }

    var user = await getUserByExternalIdService(payload.enrollment.externalId,institution.id)

    if(!user){
        throw Error('user not found')
    }

    var course = await existCourseService(
        payload.enrollment.course.id,
        institution.id
    )

    if(!course){
        throw Error('course not found')
    }

    const enrollmentDestiny: enrollmentResult = {
        externalId:payload.enrollment.externalId,
        institutionId:institution.id,
        userId:user.id,
        courseId: course.id,
        startDate: payload.enrollment.started_at,
        endDate:payload.enrollment.finished_at
    }

    var [enrollment,created] = await createEnrollmentService(
        enrollmentDestiny,institution.id,course.id
    )
}

export async function updateEnrollment(payload:eventEnrollment){

    var institution = await getInstitution(payload.institution)

    if (!institution) {
        throw Error('insititution not found')
    }
}

export async function deleteEnrollment(payload:eventDeleteEnrollment){

}