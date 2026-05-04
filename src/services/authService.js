const USERS_KEY = "hiremaster_users";

function getStoredUsers() {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
}

function saveStoredUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function registerUser({ fullName, email, password, role }) {
  const users = getStoredUsers();

  const existingUser = users.find(
    (user) => user.email.toLowerCase() === email.toLowerCase()
  );

  if (existingUser) {
    return {
      success: false,
      message: "An account with this email already exists.",
    };
  }

  const newUser = {
    id: Date.now().toString(),
    fullName,
    email,
    password,
    role,
    avatar: "",
    createdAt: new Date().toISOString(),
  };

  const updatedUsers = [...users, newUser];
  saveStoredUsers(updatedUsers);

  return {
    success: true,
    user: newUser,
  };
}

export function loginUser({ email, password }) {
  const users = getStoredUsers();

  const foundUser = users.find(
    (user) => user.email.toLowerCase() === email.toLowerCase()
  );

  if (!foundUser) {
    return {
      success: false,
      message: "No account found with this email.",
    };
  }

  if (foundUser.password !== password) {
    return {
      success: false,
      message: "Incorrect password.",
    };
  }

  return {
    success: true,
    user: foundUser,
  };
}

export function findUserByEmail(email) {
  const users = getStoredUsers();

  return users.find(
    (user) => user.email.toLowerCase() === email.toLowerCase()
  );
}

export function resetUserPassword(email, newPassword) {
  const users = getStoredUsers();

  const updatedUsers = users.map((user) => {
    if (user.email.toLowerCase() === email.toLowerCase()) {
      return {
        ...user,
        password: newPassword,
      };
    }

    return user;
  });

  saveStoredUsers(updatedUsers);
}

export function updateStoredUser(updatedUserData) {
  const users = getStoredUsers();

  const updatedUsers = users.map((user) => {
    if (user.id === updatedUserData.id) {
      return {
        ...user,
        ...updatedUserData,
      };
    }

    return user;
  });

  saveStoredUsers(updatedUsers);
}

export function changeStoredUserPassword(userId, currentPassword, newPassword) {
  const users = getStoredUsers();
  const foundUser = users.find((user) => user.id === userId);

  if (!foundUser) {
    return {
      success: false,
      message: "User account not found.",
    };
  }

  if (foundUser.password !== currentPassword) {
    return {
      success: false,
      message: "Current password is incorrect.",
    };
  }

  const updatedUsers = users.map((user) => {
    if (user.id === userId) {
      return {
        ...user,
        password: newPassword,
      };
    }

    return user;
  });

  saveStoredUsers(updatedUsers);

  return {
    success: true,
    message: "Password changed successfully.",
  };
}