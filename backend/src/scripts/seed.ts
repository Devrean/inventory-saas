import { prisma } from "../core/lib/prisma";
import { CompanyRole, WarehouseRole } from "../generated/prisma";
import { hashPassword } from "../modules/auth/auth.helpers";

const users = [
  {
    id: 1,
    username: "erean",
    email: "citeren28@gmail.com",
    password: "123456",
    is_verified: true,
  },
  {
    id: 2,
    username: "eren",
    email: "citeren04@gmail.com",
    password: "123456",
    is_verified: true,
  },
];
const companies = [
  {
    id: 1,
    name: "erean Company1",
    description: "erean Description1",
    owner_id: 1,
  },
  {
    id: 2,
    name: "erean Company2",
    description: "erean Description2",
    owner_id: 1,
  },
  {
    id: 3,
    name: "eren Company1",
    description: "eren Description1",
    owner_id: 2,
  },
  {
    id: 4,
    name: "eren Company2",
    description: "eren Description2",
    owner_id: 2,
  },
];
const products = [
  {
    id: 1,
    name: "Product1",
    description: "Product 1 Description",
    price: 1000,
    company_id: 1,
  },
  {
    id: 2,
    name: "Product2",
    description: "Product 2 Description",
    price: 2000,
    company_id: 1,
  },
  {
    id: 3,
    name: "Product3",
    description: "Product 3 Description",
    price: 1500,
    company_id: 2,
  },
  {
    id: 4,
    name: "Product4",
    description: "Product 4 Description",
    price: 500,
    company_id: 2,
  },
  {
    id: 5,
    name: "Product5",
    description: "Product 5 Description",
    price: 1000,
    company_id: 3,
  },
  {
    id: 6,
    name: "Product6",
    description: "Product 6 Description",
    price: 1600,
    company_id: 3,
  },
  {
    id: 7,
    name: "Product7",
    description: "Product 7 Description",
    price: 10400,
    company_id: 4,
  },
  {
    id: 8,
    name: "Product4",
    description: "Product 4 Description",
    price: 10100,
    company_id: 4,
  },
];
const roles = [
  {
    id: 1,
    name: "ADMIN",
  },
  {
    id: 2,
    name: "MEMBER",
  },
  {
    id: 3,
    name: "MODERATOR",
  },
];
const warehouses = [
  {
    id: 1,
    name: "Warehouse1",
    capacity: 50,
    address: "Samsun",
    company_id: 1,
  },
  {
    id: 2,
    name: "Warehouse2",
    capacity: 50,
    address: "Bafra",
    company_id: 1,
  },
  {
    id: 3,
    name: "Warehouse3",
    capacity: 50,
    address: "Sinop",
    company_id: 2,
  },
  {
    id: 4,
    name: "Warehouse4",
    capacity: 50,
    address: "İstanbul",
    company_id: 2,
  },
  {
    id: 5,
    name: "Warehouse5",
    capacity: 50,
    address: "Samsun",
    company_id: 3,
  },
  {
    id: 6,
    name: "Warehouse6",
    capacity: 50,
    address: "Samsun",
    company_id: 3,
  },
  {
    id: 7,
    name: "Warehouse7",
    capacity: 50,
    address: "Samsun",
    company_id: 4,
  },
  {
    id: 8,
    name: "Warehouse8",
    capacity: 50,
    address: "Sinop",
    company_id: 4,
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
    role: CompanyRole.MEMBER,
  },
  {
    member_id: 2,
    company_id: 2,
    role: CompanyRole.ADMIN,
  },
  {
    member_id: 1,
    company_id: 3,
    role: CompanyRole.MEMBER,
  },
  {
    member_id: 1,
    company_id: 4,
    role: CompanyRole.ADMIN,
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
    permission_id: 6,
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
    user_id: 1,
  },
];
const warehouseManagers = [
  {
    user_id: 2,
    warehouse_id: 1,
    role: WarehouseRole.MEMBER,
  },
  {
    user_id: 2,
    warehouse_id: 2,
    role: WarehouseRole.ADMIN,
  },
  {
    user_id: 1,
    warehouse_id: 5,
    role: WarehouseRole.MEMBER,
  },
  {
    user_id: 1,
    warehouse_id: 6,
    role: WarehouseRole.ADMIN,
  },
];
const warehouseProducts = [
  {
    product_id: 1,
    stock: 50,
    warehouse_id: 1,
  },
  {
    product_id: 2,
    stock: 35,
    warehouse_id: 2,
  },
  {
    product_id: 3,
    stock: 23,
    warehouse_id: 3,
  },
  {
    product_id: 4,
    stock: 32,
    warehouse_id: 4,
  },
  {
    product_id: 5,
    stock: 20,
    warehouse_id: 5,
  },
  {
    product_id: 6,
    stock: 34,
    warehouse_id: 6,
  },
  {
    product_id: 7,
    stock: 50,
    warehouse_id: 7,
  },
  {
    product_id: 8,
    stock: 20,
    warehouse_id: 8,
  },
];
const buildSeedFile = async () => {
  try {
    // delete current datas
    await prisma.user.deleteMany({});
    await prisma.rolesOnUsers.deleteMany({});
    await prisma.warehouseProduct.deleteMany({});
    await prisma.warehouseManager.deleteMany({});
    await prisma.product.deleteMany({});
    await prisma.company.deleteMany({});
    await prisma.companyMember.deleteMany({});
    await prisma.role.deleteMany({});
    await prisma.rolePermissions.deleteMany({});
    await prisma.rolesOnUsers.deleteMany({});
    await prisma.warehouse.deleteMany({});
    await prisma.permission.deleteMany({});

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
