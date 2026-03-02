import {pgTable, varchar, timestamp, integer } from 'drizzle-orm/pg-core';

export const inventories = pgTable('inventories', {
    id: integer().primaryKey().generatedByDefaultAsIdentity(),
    name: varchar({length:255}).notNull(),
    location: varchar({length:255}),
    createdAt: timestamp().defaultNow(),
});