import {pgTable, integer, varchar, timestamp } from 'drizzle-orm/pg-core';

export const companies = pgTable('companies', {
    id: integer().primaryKey().generatedByDefaultAsIdentity(),
    name: varchar({length:255}).notNull(),
    logo: varchar({length:255}).notNull(),
    createdAt: timestamp().defaultNow()
})

export const branch = pgTable('branch', {
    id: integer().primaryKey().generatedByDefaultAsIdentity(),
    name: varchar({length:255}).notNull(),
    manager: varchar({length:255}).notNull(),
    companyId: integer().references(() => companies.id),
    createdAd: timestamp().defaultNow()
})