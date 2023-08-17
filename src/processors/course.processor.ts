import { courseResult, eventCourse, deleteCourse } from "./interfaces/course.interface";
import { createCourseService, deleteCourseService, existCourseService} from "../services/course.service";
import { getInstitution } from "../services/institution.service";

 export async function createCourse (payload:eventCourse): Promise<void> {
    
    var institution = await getInstitution(payload.institution)

    if (!institution) {
        throw Error('insititution not found')
    }

    const courseDestiny:courseResult = {
        externalId:payload.course.id,
        name:payload.course.fullname,
        shortName:payload.course.shortname,
        idNumber:payload.course.idnumber,
        institutionId:institution.id,
        endDate:payload.course.enddate,
        startDate:payload.course.startdate
    }

    var[course,created] = await createCourseService(courseDestiny,institution.id)
}

export async function updateCourse (payload:eventCourse): Promise<void> {
    var institution = await getInstitution(payload.institution)

    if (!institution) {
        throw Error('insititution not found')
    }

    const courseDestiny:courseResult = {
        externalId:payload.course.id,
        name:payload.course.fullname,
        shortName:payload.course.shortname,
        idNumber:payload.course.idnumber,
        institutionId:institution.id,
        endDate:payload.course.enddate,
        startDate:payload.course.startdate
    }

    var existRecord = await existCourseService(courseDestiny.externalId,institution.id);
    
    if(existRecord){
        await existRecord.update(courseDestiny)
    }else{
        await createCourseService(courseDestiny,institution.id)
    }
}

export async function deleteCourse(payload:deleteCourse): Promise<void> {
    var institution = await getInstitution(payload.institution)

    if (!institution) {
        throw Error('insititution not found')
    }

    await deleteCourseService(payload.course_id);
}