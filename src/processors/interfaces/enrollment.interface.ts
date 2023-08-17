import Institution  from "./institution.interface";
import { Course } from "./course.interface";
import { Settings } from "./settingsnotify.interface";

export interface Enrollment {
    externalId:  number;
    user_id:     string;
    started_at:  string;
    finished_at: string;
    settings:    Settings;
    course:      Course;
}

export interface eventEnrollment {
    uuid:        string;
    fired_at:    Date;
    institution: Institution;
    modality:    string;
    enrollment:  Enrollment;
}

export interface enrollmentResult {
    externalId: number
    institutionId: number
    userId: number
    courseId: number
    startDate: string
    endDate: string
}