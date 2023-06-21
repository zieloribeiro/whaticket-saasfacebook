import { QueryInterface } from "sequelize";
import { hash } from "bcryptjs";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.sequelize.transaction(async t => {
        return queryInterface.bulkInsert(queryInterface.bulkInsert(
          "Users",
          [
            {
              name: "Admin",
              email: "admin@admin.com",
              profile: "admin",
              passwordHash: "admin"
              companyId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
              super: true
            }
          ],
          { transaction: t }
        )
      ]);
    });
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete("Users", {});
  }
};
