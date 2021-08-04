import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@myeshop.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "jone Michel",
    email: "michel.john@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Joseph Wilson",
    email: "joseph.w@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
