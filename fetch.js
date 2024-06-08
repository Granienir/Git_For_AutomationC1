// GET запит
fetch("https://api.example.com/users/1")
  .then((response) => response.json())
  .then((data) => {
    console.log("GET Response:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// POST запит
const newUser = {
  name: "Alice",
  email: "alice@example.com",
};

fetch("https://api.example.com/users/1", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newUser),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("POST Response:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// PUT запит
const updatedUser = {
  name: "Alice Smith",
};

fetch("https://api.example.com/users/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updatedUser),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("PUT Response:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// DELETE запит
fetch("https://api.example.com/users/1", {
  method: "DELETE",
})
  .then((response) => {
    if (response.ok) {
      console.log("User deleted successfully");
    } else {
      console.error("Error:", response.statusText);
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });

///////////////////////////////////////////////////////////////////////////
async function fetchData(url, options) {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function getUserData() {
  try {
    const users = await fetchData("https://api.example.com/users");
    console.log("GET Response:", users);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function createUser(newUser) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    };
    const createdUser = await fetchData("https://api.example.com/users", options);
    console.log("POST Response:", createdUser);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function updateUser(updatedUser) {
  try {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    };
    const updatedUserData = await fetchData("https://api.example.com/users/1", options);
    console.log("PUT Response:", updatedUserData);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function deleteUser() {
  try {
    const options = {
      method: "DELETE",
    };
    const response = await fetch("https://api.example.com/users/1", options);
    if (response.ok) {
      console.log("User deleted successfully");
    } else {
      console.error("Error:", response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

// Виклик функцій
getUserData();
createUser({
  name: "Alice",
  email: "alice@example.com",
});
updateUser({
  name: "Alice Smith",
});
deleteUser();
