import React from "react";

export default function Todos() {
  const getTodos = async () => {
    try {
      const response = await fetch(
        "https://85f41e4d-eae6-4371-8335-1614e4dd38c9.mock.pstmn.io/todos",
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  React.useEffect(() => {
    getTodos();
  }, []);
  return <div>Todos</div>;
}
