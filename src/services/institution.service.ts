import Institution from "../processors/interfaces/institution.interface"
import { Institution as InstitutionModel } from "../config/db/models"

const getInstitution = async (institution:Institution) => {
    return await InstitutionModel.findOne({
        where:{
            abbreviation:institution.institution_abbreviation,
            modality:institution.modality
        }
    })
}

export {
    getInstitution
}