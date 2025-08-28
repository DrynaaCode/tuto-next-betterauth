import { boolean, integer, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";
export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id"),
  providerId: text("provider_id"),
  provider: text("provider"),
  providerAccountId: text("provider_account_id"),
  type: text("type"),
  accessToken: text("access_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  expiresAt: timestamp("expires_at"),
  scope: text("scope"),
  sessionState: text("session_state"),
  tokenType: text("token_type"),
  oauthToken: text("oauth_token"),
  oauthTokenSecret: text("oauth_token_secret"),
  userId: text("user_id").notNull().references(() => user.id, { onDelete: 'cascade' }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name"),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified"),
  image: text("image"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  // Champs additionnels pour compatibilité future
  username: text("username"),
  phone: text("phone"),
  isActive: boolean("is_active"),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => user.id, { onDelete: 'cascade' }),
  sessionToken: text("session_token"),
  token: varchar({ length: 255 }).notNull().unique(),
  expiresAt: timestamp("expires_at"),
  expiresat: timestamp(),
  ipAddress: varchar({ length: 255 }).notNull(),
  userAgent: text("user_agent"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  // Champs additionnels pour compatibilité future
  type: text("type"),
  token: text("token"),
});