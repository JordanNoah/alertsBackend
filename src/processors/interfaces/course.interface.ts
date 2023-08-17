import Institution from "./institution.interface";

export interface Course {
    id:                       number;
    category:                 string;
    sortorder:                string;
    fullname:                 string;
    shortname:                string;
    idnumber:                 string;
    summary:                  null;
    summaryformat:            string;
    format:                   string;
    showgrades:               string;
    newsitems:                string;
    startdate:                string;
    enddate:                  string;
    relativedatesmode:        string;
    marker:                   string;
    maxbytes:                 string;
    legacyfiles:              string;
    showreports:              string;
    visible:                  string;
    visibleold:               string;
    downloadcontent:          null;
    groupmode:                string;
    groupmodeforce:           string;
    defaultgroupingid:        string;
    lang:                     string;
    calendartype:             string;
    theme:                    string;
    timecreated:              string;
    timemodified:             string;
    requested:                string;
    enablecompletion:         string;
    completionnotify:         string;
    cacherev:                 string;
    originalcourseid:         null;
    showactivitydates:        string;
    showcompletionconditions: string;
}

export interface courseResult {
    externalId: number,
    institutionId: number,
    name: string,
    shortName: string,
    idNumber: string,
    startDate: string,
    endDate: string
}

export interface eventCourse {
    institution: Institution;
    fired_at:    Date;
    uuid:        string;
    course:      Course;
}

export interface deleteCourse {
    institution: Institution;
    fired_at:    Date;
    uuid:        string;
    course_id:   number;
}
