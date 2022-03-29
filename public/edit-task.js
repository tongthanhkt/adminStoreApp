const taskIdEl = document.querySelector(".task-edit-id");
const taskEditNameDOM = document.querySelector(".task-edit-name");
const taskFormDOM = document.querySelector(".single-task-form");
const formAlert = document.querySelector(".form-alert");
const params = window.location.search;
const id = new URLSearchParams(params).get("id");
const showTask = async () => {
  try {
    const {
      data: { task },
    } = await axios.get(`/api/v1/tasks/${id}`);
    const { _id, name, completed } = task;
    console.log(name);
    taskIdEl.innerText = _id;
    taskEditNameDOM.value = name;
  } catch (error) {}
};
showTask();
taskFormDOM.addEventListener("submit", async (e) => {
  e.preventDefault();
  const taskInput = taskEditNameDOM.value;
  console.log(taskInput);
  await axios.patch(`api/v1/tasks/${id}`, {
    name: taskInput,
  });
  formAlert.innerText = "Edit Successfully";
});
