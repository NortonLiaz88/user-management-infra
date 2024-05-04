import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://admin:admin@localhost:5432",
    },
  },
});

const hashedPassword = bcrypt.hashSync("123456", 10);

async function main() {
  await prisma.user.createMany({
    data: [
      {
        email: "admin@domain.com",
        password: hashedPassword,
        username: "admin",
        name: "Admin",
        lastName: "Admin",
        status: "ACTIVE",
        permission: "ADMIN",
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
