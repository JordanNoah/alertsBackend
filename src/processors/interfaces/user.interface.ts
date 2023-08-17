import Institution from "./institution.interface";

export interface User {
    id:                number;
    auth:              string;
    confirmed:         string;
    policyagreed:      string;
    deleted:           string;
    suspended:         string;
    mnethostid:        string;
    username:          string;
    password:          string;
    idnumber:          string;
    firstname:         string;
    lastname:          string;
    email:             string;
    emailstop:         string;
    phone1:            string;
    phone2:            string;
    institution:       string;
    department:        string;
    address:           string;
    city:              string;
    country:           string;
    lang:              string;
    calendartype:      string;
    theme:             string;
    timezone:          string;
    firstaccess:       string;
    lastaccess:        string;
    lastlogin:         string;
    currentlogin:      string;
    lastip:            string;
    secret:            string;
    picture:           string;
    description:       null;
    descriptionformat: string;
    mailformat:        string;
    maildigest:        string;
    maildisplay:       string;
    autosubscribe:     string;
    trackforums:       string;
    timecreated:       string;
    timemodified:      string;
    trustbitmask:      string;
    imagealt:          null;
    lastnamephonetic:  null;
    firstnamephonetic: null;
    middlename:        null;
    alternatename:     null;
    moodlenetprofile:  null;
}

export interface UserResult {
    externalId: number,
    institutionId: number,
    userName: string,
    fullName: string
}

export interface eventUser {
    institution: Institution;
    fired_at:    Date;
    uuid:        string;
    user:        User;
}

export interface deleteUser {
    institution: Institution;
    fired_at:    Date;
    uuid:        string;
    user_id:     number;
}
