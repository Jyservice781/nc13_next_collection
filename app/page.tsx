"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function Home() {
  const [name, setName] = useState({});
  const route = useRouter();

  useEffect(() => {
    fetch("http://211.188.50.32:8080/api/replies/selectList")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log(response);
        return response.json();
      })
      .then((data) => {
        // insert 만들기 (JSON.stringify(data));
       // alert(JSON.stringify(data));
        setName(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);

  const handleClick = () => {
    route.push('/hotel')
  }

  return (
      <table className="table-auto font-bold md:table-fixed border-separate border-collapse border border-slate-500">
        <thead>
          <tr>
            <th className="border border-slate-600">id</th>
            <th  className="border border-slate-600">title</th>
            <th  className="border border-slate-600">content</th>
          </tr>
        </thead>
        <tbody>
            {/* {name.map((list) => (
              <tr key={list.id}>
                <td className="border border-slate-600">{list.id}</td>
                <td className="border border-slate-600">{list.title}</td>
                <td className="border border-slate-600">{list.content}</td>
              </tr>
            ))} */}
        <tr>
          <td>
            <button onClick={handleClick}>Move Save</button>
          </td>
        </tr>
      </tbody>
      </table>
  );
}
