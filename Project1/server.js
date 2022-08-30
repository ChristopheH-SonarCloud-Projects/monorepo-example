const express = require('express');

const app = express();
const port = process.env.PORT || 9626;
const www = process.env.WWW || './dist';

const captains = console;

const start = () => {
  app.use(express.static(www));
  captains.log(`serving ${www}`);
  app.get('*', (req, res) => {
    res.sendFile(`index.html`, { root: www });
  });

  nonCompliantCode();

  app.listen(port, () => captains.log(`listening on http://localhost:${port}`));
};

// https://rules.sonarsource.com/javascript/RSPEC-5131
function nonCompliantCode(req, res){
  const tainted = req.query.name;
  res.send(tainted); // Noncompliant
}


start();
