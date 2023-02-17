import React, { useEffect, useState } from "react";

const App = () => {
  const [backendData, setBackendData] = useState({ users: [] });

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  console.log(backendData.users);

  return (
    <div>
      {typeof backendData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => {
          return <p key={i}>{user}</p>;
        })
      )}
    </div>
  );
};

export default App;
