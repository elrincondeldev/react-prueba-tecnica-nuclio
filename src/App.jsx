import { useEffect, useState } from "react";

const DOG_CEO_API = "https://dog.ceo/api/breeds/image/random";
const RANDOM_USER_API = "https://randomuser.me/api/";

function App() {
  const [dog, setDog] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    fetch(DOG_CEO_API)
      .then((response) => response.json())
      .then((data) => setDog(data.message));
  }, []);

  useEffect(() => {
    fetch(RANDOM_USER_API)
      .then((response) => response.json())
      .then((data) => setName(data.results[0].name.first));
  }, []);

  const onHandleSubmit = () => {
    fetch(DOG_CEO_API)
      .then((response) => response.json())
      .then((data) => setDog(data.message));

    fetch(RANDOM_USER_API)
      .then((response) => response.json())
      .then((data) => setName(data.results[0].name.first));
  };
  return (
    <main className="flex flex-col gap-5 items-center justify-center h-screen font-bold text-4xl">
      <img
        className="h-64 w-auto"
        src={dog}
        alt="Imagen de un perro obtenida por la API dog.ceo."
      />
      <p>{name}</p>
      <button onClick={() => onHandleSubmit()}>🔄</button>
    </main>
  );
}

export default App;
