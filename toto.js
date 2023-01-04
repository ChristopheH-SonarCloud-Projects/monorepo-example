// https://rules.sonarsource.com/javascript/RSPEC-5131
function nonCompliantCode(req, res){
  const tainted = req.query.name;
  res.send(tainted); // Noncompliant
}
