const URL = 'https://todo-api.roto.codes';

export const readTodoList = async (user) => {
  try {
    const response = await fetch(`${URL}/${user}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`${error}`);
  }
};

export const readUserList = async () => {
  try {
    const response = await fetch(`${URL}/users`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`${error}`);
  }
};

export const addTodo = async (todo) => {
  try {
    const response = await fetch(`${URL}/bullwoo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: todo,
      }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`${error}`);
  }
};

export const deleteTodo = async (todoId) => {
  try {
    const response = await fetch(`${URL}/bullwoo/${todoId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
  } catch (error) {
    console.error(`${error}`);
  }
};

export const deleteAllTodo = async () => {
  try {
    const response = await fetch(`${URL}/bullwoo/all`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
  } catch (error) {
    console.error(`${error}`);
  }
};

export const toggleTodo = async (todoId) => {
  try {
    const response = await fetch(`${URL}/bullwoo/${todoId}/toggle`, {
      method: 'PUT',
    });
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
  } catch (error) {
    console.error(`${error}`);
  }
};
