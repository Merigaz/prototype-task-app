import tasksAPI from "../utilities/tasks.json";
import TaskCard from "./TaskCard";

export default function AllTaskListCard() {
  const data = tasksAPI.data;

  console.log(data);
  return (
    <div key={"AQUI TENGO QUE PONER UN IDENTIFICADOR PARA CADA LISTA"} className="h-full w-94 bg-cool-white absolute right-0 bottom-0 z-20 task-card-bg">
      {data.map((data:any) => (
        <TaskCard data={data} key={data.index}/>
      ))}
    </div>
  );
}
