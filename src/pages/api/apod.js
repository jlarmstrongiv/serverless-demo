// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function handler(req, res) {
  const response = await axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
  );

  res.statusCode = 200;
  res.json(response.data);
}
