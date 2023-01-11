const express = require("express");
const cc_serivice = require("../services/psp-credit-card-service")
const route = express();
const port = 8081;

route.use(express.json());
route.use(
  express.urlencoded({
    extended: true,
  })
);
route.get("/", (req, res) => {
  res.json({ message: "ok" });
});

// Router to creat credit card details
route.post('/add', async function(req, res, next) {
    try {
        console.log(`request ${req.body}`);
      res.json(await cc_serivice.addCreditCardDetails(req.body));
    } catch (err) {
      console.error(`Error while creating programming language`, err.message);
      next(err);
    }
  });
// Get end point to retrieve Credit Card detials
route.get('/get', async function (req,res,next){
    try {
        res.json(await cc_serivice.getCreditCardDetails());
      } catch (err) {
        console.error(`Error while retrieving credit card Details`, err.message);
        next(err);
      }

})

route.listen(port, () => {
  console.log(`PSP app listening at http://localhost:${port}`);
});
