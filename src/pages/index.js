import React from "react";
import axios from "axios";

export default function Home() {
  const [apod, setApod] = React.useState();

  React.useEffect(() => {
    axios.get("/api/apod").then((response) => setApod(response.data));
  }, []);

  return (
    <main>
      <h1>{apod?.title}</h1>
      {apod?.media_type === "image" && <img src={apod?.url} />}
    </main>
  );
}
