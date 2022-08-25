-- CreateTable
CREATE TABLE "Apartment" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "furniture" TEXT NOT NULL,
    "viewDirection" TEXT,
    "project" TEXT NOT NULL,
    "division" TEXT NOT NULL,
    "building" TEXT NOT NULL,
    "inOutDate" TIMESTAMP(3),
    "floor" TEXT NOT NULL,
    "defaultPrice" INTEGER NOT NULL,
    "deposit" TEXT NOT NULL,
    "paymentPeriod" TEXT NOT NULL,

    CONSTRAINT "Apartment_pkey" PRIMARY KEY ("id")
);
