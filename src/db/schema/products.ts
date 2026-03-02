import { integer, varchar, text, timestamp, decimal, pgTable } from 'drizzle-orm/pg-core';

export const products = pgTable("products", {
    id: integer().primaryKey().generatedByDefaultAsIdentity(),
    name: varchar({length:255}).notNull(),
    description: text(),
    price: decimal({precision:10, scale:2}).notNull(),
    sku: varchar({length:100}).unique().notNull(),
    createdAt: timestamp().defaultNow(),
    updatedAt: timestamp().defaultNow(),
});