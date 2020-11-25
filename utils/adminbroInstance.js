const AdminBro = require("admin-bro");
const AdminBroSequelize = require("@admin-bro/sequelize");
const weatherModel = require("../models/weatherModel");
const db = require("../db");

//AdminBro
AdminBro.registerAdapter(AdminBroSequelize);

const adminBro = new AdminBro({
  databases: [db],
  rootPath: "/admin",
  resources: [
    {
      resource: weatherModel,
      options: {
        navigation: { name: "Data" }
      }
    }
  ],
  dashboard: {
    handler: async () => {
      const data = await weatherModel.findAll();
      return data;
    },
    component: AdminBro.bundle("../components/Weather")
  },
  branding: {
    companyName: "Test task"
  }
});

module.exports = adminBro;
