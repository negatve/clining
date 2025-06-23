/*
  Warnings:

  - You are about to drop the column `created_at` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Service` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Service" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "unit" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "image_url" TEXT,
    "discount" INTEGER,
    "is_popular" BOOLEAN NOT NULL DEFAULT false,
    "service_code" TEXT NOT NULL,
    "rating" REAL
);
INSERT INTO "new_Service" ("category", "description", "discount", "duration", "id", "image_url", "is_active", "is_popular", "name", "price", "rating", "service_code", "unit") SELECT "category", "description", "discount", "duration", "id", "image_url", "is_active", "is_popular", "name", "price", "rating", "service_code", "unit" FROM "Service";
DROP TABLE "Service";
ALTER TABLE "new_Service" RENAME TO "Service";
CREATE UNIQUE INDEX "Service_service_code_key" ON "Service"("service_code");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
