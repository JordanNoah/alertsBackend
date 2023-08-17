import { Optional } from "sequelize";

export type CreateInstitutionDTO = {
    uuid: string;
    name: string;
    fullname: string;
    abbreviation: string;
    domain: string;
    token: string;
    website: string;
    rest_path: string;
    modality: string;
    translations: Object;
}

export type UpdateInstitutionDTO = Optional<CreateInstitutionDTO, 'uuid'>