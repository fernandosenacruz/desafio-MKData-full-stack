-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "taxpaperRegistration" VARCHAR(18) NOT NULL,
    "group" VARCHAR(50) NOT NULL,
    "activate" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "registration" VARCHAR(50) NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);
