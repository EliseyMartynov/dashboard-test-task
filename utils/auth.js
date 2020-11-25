const AdminBroExpress = require("@admin-bro/express");
const adminBro = require("./adminbroInstance");

const ADMIN = {
  email: "test@example.com",
  password: "password"
};

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    if (ADMIN.password === password && ADMIN.email === email) {
      return ADMIN;
    }
    return null;
  },
  cookieName: "adminbro",
  cookiePassword: "somePassword"
});

module.exports = router;
