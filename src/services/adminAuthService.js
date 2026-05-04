const ADMIN_CREDENTIALS = [
  {
    email: "admin@hiremaster.com",
    password: "Admin12345",
    name: "HireMaster Admin",
    role: "admin",
  },
];

export function validateAdminLogin(email, password) {
  return ADMIN_CREDENTIALS.find(
    (admin) => admin.email === email && admin.password === password
  );
}