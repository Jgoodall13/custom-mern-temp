import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCount, postCount, deleteCount } from "../api/count";

function Counter() {
  const [count, setCount] = useState(0);
  const queryClient = useQueryClient();

  const { data, isPending, isError } = useQuery({
    queryKey: ["count"],
    queryFn: getCount,
  });

  const handleBtnClick = (str: string) => {
    str === "-" ? setCount((prev) => prev - 1) : setCount((prev) => prev + 1);
  };

  const mutation = useMutation({
    mutationFn: postCount,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["count"] });
      setCount(0);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteCount,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["count"] });
    },
  });

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Error loading todos</p>;
  return (
    <div>
      <h2 className="text-2xl text-bold text-center mb-10 text-cyan-500">
        {count}
      </h2>
      <div className="flex items-center justify-center">
        <button
          onClick={() => handleBtnClick("-")}
          className="py-2 px-4 m-2 bg-violet-500 text-white text-xl text-bold hover:bg-violet-700"
        >
          -
        </button>
        <button
          onClick={() => handleBtnClick("+")}
          className="py-2 px-4 m-2 bg-violet-500 text-white text-xl text-bold hover:bg-violet-700"
        >
          +
        </button>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={() =>
            mutation.mutate({
              value: count,
            })
          }
          className="py-2 px-4 m-2 bg-green-500 text-white text-xl text-bold rounded-lg shadow-lg duration-200 hover:bg-green-700 hover:translate-y-[-5px]"
        >
          {mutation.isPending ? "Adding..." : "Submit"}
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h4 className="text-center text-2xl">
          Submitted Counts from Database.
        </h4>
        <ul>
          {data.count?.map((count: any) => (
            <li
              className="text-xl flex justify-center items-center text-white bg-red-500 py-2 px-8 my-4"
              key={count._id}
            >
              {count.value}
              <span
                onClick={() => deleteMutation.mutate(count._id)}
                className="text-red-500 text-xl border border-white bg-white p-4 ml-12 cursor-pointer hover:bg-red-500 hover:text-white"
              >
                X
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Counter;
