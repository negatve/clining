/*
  Warnings:

  - You are about to drop the column `rating` on the `Service` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Rating" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "serviceId" INTEGER NOT NULL,
    "value" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Rating_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

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
    "service_code" TEXT NOT NULL
);
INSERT INTO "new_Service" ("category", "description", "discount", "duration", "id", "image_url", "is_active", "is_popular", "name", "price", "service_code", "unit") SELECT "category", "description", "discount", "duration", "id", "image_url", "is_active", "is_popular", "name", "price", "service_code", "unit" FROM "Service";
DROP TABLE "Service";
ALTER TABLE "new_Service" RENAME TO "Service";
CREATE UNIQUE INDEX "Service_service_code_key" ON "Service"("service_code");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
