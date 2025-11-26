import { Request, Response } from "express";
import { ResponseHandler } from "../lib/response";
import { createCompanySchema } from "../validation/company.validation";
import { CompanyService } from "../services/company.service";

export class CompanyController{
    private responseHandler : ResponseHandler
    private companyService : CompanyService
    constructor(responseHandler:ResponseHandler,companyService:CompanyService){
        this.responseHandler = responseHandler
        this.companyService = companyService
    }

    public createCompany = async(req:Request,res:Response) : Promise<void> => {
        const body = createCompanySchema.parse({
            ...req.body
        })
        try {
            await this.companyService.createCompanyService(body)
        } catch(error : any){
            this.responseHandler.errorResponse(res,error.message)
        }
    }

}