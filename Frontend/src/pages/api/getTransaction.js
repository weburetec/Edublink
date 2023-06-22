const handler = async (req, res) => {
  const method = "GET";

  //fetch options
  const options = {
    method: method,
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImU1ZDhjYTc3LTU4MjgtNDVkNy05MmY2LTZjYTAxODIzNzQ3NiIsImNvbXBhbnlJZCI6IjY0NmVkYWYyMDI5OTNjMDAwODhkMDIwYSIsImlhdCI6MTY4Njc0NzQzNiwiZXhwIjo0ODQyNDIxMDM2fQ.7RzacNZcu2TwCDi8JOvAzIL2SjJ3e5aA7AGalpbVwBw",
      "Access-Control-Allow-Origin": "true",
    },
    body: JSON.stringify(),
  };
  const transactionId = "64913c0db3548f000861a9fa";

  //fetchUrl
  const url = `https://api.geniebiz.lk/public/transactions/${transactionId}`;
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
