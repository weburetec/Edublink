import axios from "axios";

const handler = async (req, res) => {
  const method = "POST";

  const postBody = {
    amount: 500,
    currency: "LKR",
  };

  //fetch options
  const options = {
    method: method,
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImU1ZDhjYTc3LTU4MjgtNDVkNy05MmY2LTZjYTAxODIzNzQ3NiIsImNvbXBhbnlJZCI6IjY0NmVkYWYyMDI5OTNjMDAwODhkMDIwYSIsImlhdCI6MTY4Njc0NzQzNiwiZXhwIjo0ODQyNDIxMDM2fQ.7RzacNZcu2TwCDi8JOvAzIL2SjJ3e5aA7AGalpbVwBw",
      "Access-Control-Allow-Origin": "true",
    },
    body: JSON.stringify(postBody),
  };

  //fetchUrl
  const url = "https://api.geniebiz.lk/public/v2/transactions";
  try {
    //fetch request
    const response = await fetch(url, options);
    const data = await response.json();
    return res.end(JSON.stringify({ success: data }));
  } catch (err) {
    return res.end(JSON.stringify({ error: data }));
  }
};
export default handler;
