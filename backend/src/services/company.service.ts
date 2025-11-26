import { createCompanyDto } from "../dto/company.dto"
import { CompanyRepository } from "../repositories/company.repository"

export class CompanyService {
    private companyRepository : CompanyRepository
    constructor(companyRepository : CompanyRepository){
        this.companyRepository = companyRepository
    }

    public createCompanyService = async(body : createCompanyDto) => {

    }

}