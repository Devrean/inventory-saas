import express from "express";
import { CompanyController } from "../controllers/company.controller";
import { CompanyRepository } from "../repositories/company.repository";
import { CompanyService } from "../services/company.service";
import { ResponseHandler } from "../lib/response";

const companyRouter = express.Router();

const companyRepository = new CompanyRepository()
const responseHandler = new ResponseHandler()

const companyService = new CompanyService(
    companyRepository
)

const companyController = new CompanyController(
    responseHandler,
    companyService
);

companyRouter.post("/create-company",companyController.createCompany)




export default companyRouter
