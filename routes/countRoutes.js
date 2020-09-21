module.exports = app => {
  app.get('/api/count', (req, res) => {
    console.log("api run");
    res.send('Hello');
  });

  app.get('/api/get-new-survey', (req, res) => {
    res.send({
      body: '',
      from: '',
      subject: '',
      title: '',
      recipients: ''
    });
  });

  app.post("/api/count/plus", async (req, res) => {
    const { count } = req.body;
    console.log(count)
    res.send({
      count: count + 1
    });
  });


};