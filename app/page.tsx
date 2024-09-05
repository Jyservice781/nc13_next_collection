"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const [name, setName] = useState<
    { id: number; sore: number; roomType: number }[]
  >([]); // Reply 배열로 타입 지정
  const route = useRouter();

  useEffect(() => {
    fetch("http://211.188.50.32:8080/api/replies/selectList")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: ReplyModel[]) => {
        // 데이터를 Reply 배열로 타입 지정
        //alert(JSON.stringify(data));
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
    route.push("/reply");
  };

  const update = () => {
    route.push("/reply/update");
  };

  const deleteId = () => {
      useEffect(()=>{
       
      })
  }



  return (
      <main className="container">
          <table className="table-auto font-bold md:table-fixed border-separate border-collapse">
      <thead>
        <tr>
          <th className="border">id</th>
          <th className="border">score</th>
          <th className="border">roomType</th>
        </tr>
      </thead>
      <tbody>
        {name.map((item: ReplyModel) => (
          <tr key={item.id} className="border"> 
            <td className="border">{item.id}</td>
            <td className="border">{item.score}</td>
            <td className="border">{item.roomType}</td>
            <td className="border">
              <button type="button" className="border" onClick={update()}>수정하기</button>
              <button type="button"  className="border" onClick={deleteId()}>삭제하기</button>
            </td>
          </tr>
        ))}
        <tr>
          <td>
            <button onClick={handleClick}>Move Save</button>
          </td>
        </tr>
      </tbody>
    </table>
      </main>
  );
}
