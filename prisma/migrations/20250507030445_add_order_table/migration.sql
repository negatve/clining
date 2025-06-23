-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "serviceName" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "area" REAL NOT NULL,
    "date" DATETIME NOT NULL,
    "time" TEXT NOT NULL,
    "comments" TEXT,
    "paymentMethod" TEXT,
    "agree" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Order" ("address", "agree", "area", "city", "comments", "createdAt", "date", "email", "id", "name", "paymentMethod", "phone", "serviceName", "time") SELECT "address", "agree", "area", "city", "comments", "createdAt", "date", "email", "id", "name", "paymentMethod", "phone", "serviceName", "time" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
