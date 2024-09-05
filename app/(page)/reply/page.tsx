"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function replyRegister() {
  function InputForm() {
    const [id, setId] = useState([]);
    const [roomType, setRoomTypes] = useState([]);
    const [score, setScores] = useState([]);
    const route = useRouter();

    const handleSubmit = (event) => {
      event.preventDefault();
      //console.log(`ID: ${id}, Score: ${score}, RoomType: ${roomType}`);
      fetch("http://211.188.50.32:8080/api/replies/write", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value: `${id}, ${score}, ${roomType}`}),
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error("Error:", error));
    };

    const goBack = () => {
        route.back();
    };

    return (
      <div className="space-y-12">
        <h2>Register</h2>
        <form onSubmit={handleSubmit} className="mt-10">
          <div>
            <label htmlFor="id">ID: </label>
            <input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="ID를 입력해주세요"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label htmlFor="name">score: </label>
            <input
              type="number"
              id="name"
              value={score}
              placeholder="방타입을 1~5로 적어주세요"
              onChange={(e) => setScores(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label htmlFor="name">roomType: </label>
            <input
              type="number"
              id="name"
              value={roomType}
              placeholder="방타입을 1~5로 적어주세요"
              onChange={(e) => setRoomTypes(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <button type="submit" className="rounded-full">Submit</button>
          <button type="button" className="rounded-full m-4" onClick={() => {goBack()}}>Go-Back</button>
        </form>
      </div>
    );
  }
  return <InputForm />;
}
