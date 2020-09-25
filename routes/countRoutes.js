module.exports = (app) => {
  app.get("/api/count", (req, res) => {
    console.log("/api/count");
    res.send({
      count: 0,
    });
  });

  app.post("/api/count/plus1", async (req, res) => {
    console.log("/api/count/plus1");
    const { count } = req.body;
    res.send({
      count: count + 1,
    });
  });

  app.post("/api/count/plus10", async (req, res) => {
    console.log("/api/count/plus10");
    const { count } = req.body;
    res.send({
      count: count + 10,
    });
  });

  app.post("/api/count/minus1", async (req, res) => {
    console.log("/api/count/plus10");
    const { count } = req.body;
    res.send({
      count: count - 1,
    });
  });

  app.post("/api/count/minus10", async (req, res) => {
    console.log("/api/count/minus10");
    const { count } = req.body;
    res.send({
      count: count - 10,
    });
  });

  app.post("/api/count/x2", async (req, res) => {
    console.log("/api/count/x2");
    const { count } = req.body;
    res.send({
      count: count * 2,
    });
  });

  app.post("/api/count/x10", async (req, res) => {
    console.log("/api/count/x10");
    const { count } = req.body;
    res.send({
      count: count * 10,
    });
  });

  app.get("/api/count/reset", async (req, res) => {
    console.log("/api/count/reset");
    res.send({
      count: 0,
    });
  });
};
