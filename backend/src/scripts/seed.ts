import { prisma } from "../core/lib/prisma";
import { CompanyRole, WarehouseRole } from "../generated/prisma";
import { hashPassword } from "../modules/auth/auth.helpers";

const users = [
  {
    id: 1,
    username: "admin",
    email: "admin@gmail.com",
    password: "admin123",
    is_verified: true,
  },
  {
    id: 2,
    username: "erean",
    email: "erean123@gmail.com",
    password: "erean123",
    is_verified: true,
  },
  {
    id: 3,
    username: "mike",
    email: "mikej@gmail.com",
    password: "mikej",
    is_verified: true,
  },
];
const companies = [
  {
    id: 1,
    name: "A101",
    description: "A101 FABRKİADAN HALKA",
    owner_id: 2,
  },
  {
    id: 2,
    name: "BIM",
    description: "BIM BIM BIM",
    owner_id: 3,
  }
];
const products = [
  {
    id: 1,
    name: "Kola",
    description: "Kola 330 ML",
    price: 50,
    company_id: 1,
  },
  {
    id: 2,
    name: "Kahve",
    description: "Nescafe 3ü1 arada",
    price: 7.50,
    company_id: 1,
  },
  {
    id: 3,
    name: "Halley",
    description: "Halley 10'lu",
    price: 72,
    company_id: 1,
  },
  {
    id: 4,
    name: "Puding",
    description: "Puding 500g",
    price: 50,
    company_id: 1,
  },
  {
    id: 5,
    name: "Ayran",
    description: "Dost ayran",
    price: 8,
    company_id: 2,
  },
  {
    id: 6,
    name: "Kola",
    description: "Kola 330ML",
    price: 50,
    company_id: 2,
  },
  {
    id: 7,
    name: "Meyvesuyu",
    description: "Jucy Meyvesuyu",
    price: 15,
    company_id: 2,
  },
  {
    id: 8,
    name: "Süt",
    description: "Tam yağlı süt",
    price: 25,
    company_id: 2,
  },
];
const roles = [
  {
    id: 1,
    name: "ADMIN",
  },
  {
    id: 2,
    name: "MODERATOR",
  },
  {
    id: 3,
    name: "MEMBER",
  },
];
const warehouses = [
  {
    id: 1,
    name: "A101 Samsun",
    capacity: 70,
    address: "Cumhuriyet Meydanı Samsun",
    company_id: 1,
  },
  {
    id: 2,
    name: "A101 BAFRA",
    capacity: 50,
    address: "Bafra kent meydan",
    company_id: 1,
  },
  {
    id: 3,
    name: "BIM Trabzon",
    capacity: 70,
    address: "Ortahisar Trabzon",
    company_id: 2,
  },
  {
    id: 4,
    name: "BIM Gümüşhane",
    capacity: 50,
    address: "Gümüşhane Merkez",
    company_id: 2,
  },
];
const permissions = [
  {
    id: 1,
    name: "product.create",
  },
  {
    id: 2,
    name: "product.view",
  },
  {
    id: 3,
    name: "product.update",
  },
  {
    id: 4,
    name: "product.delete",
  },
  {
    id: 5,
    name: "user.create",
  },
  {
    id: 6,
    name: "user.view",
  },
  {
    id: 7,
    name: "user.update",
  },
  {
    id: 8,
    name: "user.delete",
  },
  {
    id: 9,
    name: "company.create",
  },
  {
    id: 10,
    name: "company.view",
  },
  {
    id: 11,
    name: "company.update",
  },
  {
    id: 12,
    name: "company.delete",
  },
  {
    id: 13,
    name: "warehouse.create",
  },
  {
    id: 14,
    name: "warehouse.view",
  },
  {
    id: 15,
    name: "warehouse.update",
  },
  {
    id: 16,
    name: "warehouse.delete",
  },
  {
    id: 17,
    name: "can.verify",
  },
  {
    id: 18,
    name: "can.resetPassword",
  },
];
const companyMembers = [
  {
    member_id: 2,
    company_id: 1,
    role: CompanyRole.OWNER,
  },
  {
    member_id: 3,
    company_id: 1,
    role: CompanyRole.MEMBER,
  },
  {
    member_id: 3,
    company_id: 2,
    role: CompanyRole.OWNER,
  },
  {
    member_id: 2,
    company_id: 2,
    role: CompanyRole.MEMBER,
  },
];
const rolePermissions = [
  {
    role_id: 1,
    permission_id: 1,
  },
  {
    role_id: 1,
    permission_id: 2,
  },
  {
    role_id: 1,
    permission_id: 3,
  },
  {
    role_id: 1,
    permission_id: 4,
  },
  {
    role_id: 1,
    permission_id: 5,
  },
  {
    role_id: 1,
    permission_id: 6,
  },
  {
    role_id: 1,
    permission_id: 7,
  },
  {
    role_id: 1,
    permission_id: 8,
  },
  {
    role_id: 1,
    permission_id: 9,
  },
  {
    role_id: 1,
    permission_id: 10,
  },
  {
    role_id: 1,
    permission_id: 11,
  },
  {
    role_id: 1,
    permission_id: 12,
  },
  {
    role_id: 1,
    permission_id: 13,
  },
  {
    role_id: 1,
    permission_id: 14,
  },
  {
    role_id: 1,
    permission_id: 15,
  },
  {
    role_id: 1,
    permission_id: 16,
  },
  {
    role_id: 1,
    permission_id: 17,
  },
  {
    role_id: 1,
    permission_id: 18,
  },
  {
    role_id: 3,
    permission_id: 1,
  },
  {
    role_id: 3,
    permission_id: 2,
  },
  {
    role_id: 3,
    permission_id: 3,
  },
  {
    role_id: 3,
    permission_id: 4,
  },
  {
    role_id: 3,
    permission_id: 9,
  },
  {
    role_id: 3,
    permission_id: 10,
  },
  {
    role_id: 3,
    permission_id: 11,
  },
  {
    role_id: 3,
    permission_id: 12,
  },
  {
    role_id: 3,
    permission_id: 13,
  },
  {
    role_id: 3,
    permission_id: 14,
  },
  {
    role_id: 3,
    permission_id: 15,
  },
  {
    role_id: 3,
    permission_id: 16,
  },
  {
    role_id: 2,
    permission_id: 1,
  },
  {
    role_id: 2,
    permission_id: 2,
  },
  {
    role_id: 2,
    permission_id: 3,
  },
  {
    role_id: 2,
    permission_id: 4,
  },
  {
    role_id: 2,
    permission_id: 6,
  },
  {
    role_id: 2,
    permission_id: 9,
  },
  {
    role_id: 2,
    permission_id: 10,
  },
  {
    role_id: 2,
    permission_id: 11,
  },
  {
    role_id: 2,
    permission_id: 12,
  },
  {
    role_id: 2,
    permission_id: 13,
  },
  {
    role_id: 2,
    permission_id: 14,
  },
  {
    role_id: 2,
    permission_id: 15,
  },
  {
    role_id: 2,
    permission_id: 16,
  },
];
const rolesOnUsers = [
  {
    assigned_by: "SYSTEM",
    role_id: 1,
    user_id: 1,
  },
  {
    assigned_by: "SYSTEM",
    role_id: 2,
    user_id: 2,
  },
  {
    assigned_by: "SYSTEM",
    role_id: 3,
    user_id: 3,
  },
];
const warehouseManagers = [
  {
    user_id: 2,
    warehouse_id: 1,
    role: WarehouseRole.ADMIN,
  },
  {
    user_id: 3,
    warehouse_id: 1,
    role: WarehouseRole.MEMBER,
  },
  {
    user_id: 2,
    warehouse_id: 2,
    role: WarehouseRole.ADMIN,
  },
  {
    user_id: 3,
    warehouse_id: 3,
    role: WarehouseRole.ADMIN,
  },
  {
    user_id: 2,
    warehouse_id: 3,
    role: WarehouseRole.MEMBER,
  },
  {
    user_id: 3,
    warehouse_id: 4,
    role: WarehouseRole.ADMIN,
  },
  
];
const warehouseProducts = [
  {
    product_id: 1,
    stock: 40,
    warehouse_id: 1,
  },
  {
    product_id: 2,
    stock: 35,
    warehouse_id: 1,
  },
  {
    product_id: 3,
    stock: 15,
    warehouse_id: 1,
  },
  {
    product_id: 4,
    stock: 5,
    warehouse_id: 1,
  },
  {
    product_id: 1,
    stock: 20,
    warehouse_id: 2,
  },
  {
    product_id: 2,
    stock: 34,
    warehouse_id: 2,
  },
  {
    product_id: 3,
    stock: 50,
    warehouse_id: 2,
  },
  {
    product_id: 4,
    stock: 20,
    warehouse_id: 2,
  },
  {
    product_id: 5,
    stock: 4,
    warehouse_id: 3,
  },
  {
    product_id: 6,
    stock: 65,
    warehouse_id: 3,
  },
  {
    product_id: 7,
    stock: 55,
    warehouse_id: 3,
  },
  {
    product_id: 8,
    stock: 15,
    warehouse_id: 3,
  },
  {
    product_id: 5,
    stock: 10,
    warehouse_id: 4,
  },
  {
    product_id: 6,
    stock: 24,
    warehouse_id: 4,
  },
  {
    product_id: 7,
    stock: 30,
    warehouse_id: 4,
  },
  {
    product_id: 8,
    stock: 3,
    warehouse_id: 4,
  },
];
const buildSeedFile = async () => {
  try {
    // add users
    for (let user of users) {
      user.password = await hashPassword(user.password);
      await prisma.user.create({
        data: {
          ...user,
        },
      });
    }
    // add roles
    for (let role of roles) {
      await prisma.role.create({
        data: role,
      });
    }
    // add Permissions
    for (let permision of permissions) {
      await prisma.permission.create({
        data: permision,
      });
    }
    // add Companies
    for (let company of companies) {
      await prisma.company.create({
        data: company,
      });
    }
    // add Warehouse
    for (let warehouse of warehouses) {
      await prisma.warehouse.create({
        data: warehouse,
      });
    }
    // add products
    for (let product of products) {
      await prisma.product.create({
        data: product,
      });
    }

    // add CompanyMembers
    for (let companyMember of companyMembers) {
      await prisma.companyMember.create({
        data: companyMember,
      });
    }
    // add rolePermissions
    for (let rolePermission of rolePermissions) {
      await prisma.rolePermissions.create({
        data: rolePermission,
      });
    }
    // add RolesOnUsers
    for (let roleOnUser of rolesOnUsers) {
      await prisma.rolesOnUsers.create({
        data: roleOnUser,
      });
    }
    // add WarehouseManager
    for (let warehouseManager of warehouseManagers) {
      await prisma.warehouseManager.create({
        data: warehouseManager,
      });
    }
    // add WarehouseProducts
    for (let warehouseProduct of warehouseProducts) {
      await prisma.warehouseProduct.create({
        data: warehouseProduct,
      });
    }
    console.log("Seed Çalıştırıldı");
  } catch (error: any) {
    console.error(error.message);
  }
};
buildSeedFile();
