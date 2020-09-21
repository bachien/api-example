module.exports = app => {
  app.get('/api/count', (req, res) => {
    console.log("api run");
    res.send({
      count: 0
    });
  });

  app.post("/api/count/plus1", async (req, res) => {
    const { count } = req.body;
    console.log(count)
    res.send({
      count: count + 1
    });
  });

  app.post("/api/count/plus10", async (req, res) => {
    const { count } = req.body;
    console.log(count)
    res.send({
      count: count + 10
    });
  });

  app.post("/api/count/minus1", async (req, res) => {
    const { count } = req.body;
    console.log(count)
    res.send({
      count: count - 1
    });
  });

  app.post("/api/count/minus10", async (req, res) => {
    const { count } = req.body;
    console.log(count)
    res.send({
      count: count - 10
    });
  });


  app.post("/api/count/x2", async (req, res) => {
    const { count } = req.body;
    console.log(count)
    res.send({
      count: count * 2
    });
  });

  app.post("/api/count/x10", async (req, res) => {
    const { count } = req.body;
    console.log(count)
    res.send({
      count: count * 10
    });
  });


};