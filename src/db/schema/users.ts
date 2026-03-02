import { integer, pgTable, text, timestamp, varchar, decimal, pgEnum,boolean} from 'drizzle-orm/pg-core';
import { branch } from './companies';

export const rolesEnum = pgEnum("roles", ["guest", "operator", "admin"]);

export const users = pgTable("users",{
    id: integer().primaryKey().generatedByDefaultAsIdentity(),
    username: varchar({length:50}).notNull().unique(),
    passwordHash: varchar({length:255}).notNull(),
    email: varchar({length:255}).notNull().unique(),
    role: rolesEnum().default("operator"),
    companyBranchId: integer("company_branch_id").references(() => branch.id),
    isActive: boolean().default(true),
    createdAt: timestamp().defaultNow(),
});
