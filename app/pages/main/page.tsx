'use client';

import { DataType, IAData } from '@/app/interfaces/type';
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import axios from 'axios';
import Delete from '@/app/utils/Delete';
interface MainProps {}

const Main: React.FC<MainProps> = () => {
  const [user, setUser] = useState<DataType[]>([]);
  const [form, setForm] = useState<IAData>({
    email: '',
    password: '',
  });

  useEffect(() => {
    // try {
    fetch('http://localhost:3000/api/main')
      .then((res) => res.json())
      .then((data) => setUser(data.data));
    // } catch (error) {
    //   console.log('에러 !!!!!!', error);
    //   return error;
    // }
  }, [setUser]);

  //axios로는 왜 에러가 뜰까?
  // useEffect(() => {
  //   const getPosts = async () => {
  //     const posts = await axios.get('http://localhost:3000/api/main');
  //     setUser(posts.data);
  //   };

  //   getPosts();
  // }, []);

  const onChgHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setForm((p) => {
      return { ...p, [name]: value };
    });
  };

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/main', form);

      const newResponse: string = response.data.message;
      alert(`${newResponse}`);
      console.log(`data : `, newResponse);
      return response;
    } catch (error) {
      console.log('에러 !!!!!!', error);
      return error;
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>여기에는 게시판을 만들어볼거야^_^</div>
      Email
      <input value={form.email} name="email" onChange={onChgHandler} type="email" />
      Password
      <input value={form.password} name="password" onChange={onChgHandler} type="text" />
      <button>확인</button>
      {user.map((item: DataType) => (
        <div key={item._id}>
          {item.email}
          {item.password}
          <Delete id={item._id} />

          <button>수정</button>
        </div>
      ))}
    </form>
  );
};

export default Main;
