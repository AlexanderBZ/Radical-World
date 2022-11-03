import Airtable from "airtable";

export default async function handler(req, res) {
  // We only want to handle POST requests, everything else gets a 404
  if (req.method === "POST") {
    await postHandler(req, res);
  } else {
    res.status(404).send("");
  }
}

async function postHandler(req, res) {
  const base = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
  }).base("appRJu4gIXBwHnDr8");

  base("Users").create(
    [
      {
        fields: {
          fldDA7dHvu67YYvkH: req.body.email,
        },
      },
    ],
    function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    }
  );
}
