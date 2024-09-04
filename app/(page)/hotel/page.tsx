"use client"
import React, { useState } from 'react';

export default function hotelRegister(){
  function InputForm() {
    const [id, setId] = useState<string>('');
    const [name, setName] = useState<string>('');
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
     // console.log(`ID: ${id}, Name: ${name}`);
    };

    return (
      <div className=''>
        <h2>hello</h2>
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">ID: </label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" onSubmit={()=> {}}>Submit</button>
      </form>
      </div>
    );
  }
}