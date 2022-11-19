import axios from "axios";

export const axiosData = async () => {
  const options = {
    url: `https://ghibliapi.herokuapp.com/films?limit=200`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const data = await axios(options)
    .then((res) => res.data)
    .catch((err) => {
      return err.message;
    });

  return data;
};
