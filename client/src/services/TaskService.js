const baseApi = "http://localhost:4000/api";

const getTasks = async function () {
  const response = await fetch(`${baseApi}/tasks`);
  console.log(response);
  return await response.json();
};

const createTask = async function (task) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  };
  const response = await fetch(`${baseApi}/tasks`, options);
  return await response.json();
};

export { getTasks, createTask };
