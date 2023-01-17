import express  from "express";
import { addCreditCardDetails, getCreditCardDetails } from "../services/psp-credit-card-service";
const route = express();
const port:number = 8081;

route.use(express.json());
route.use(
  express.urlencoded({
    extended: true,
  })
);

route.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

route.get("/", (req, res) => {
  res.json({ message: "ok" });
});

// Router to creat credit card details
route.post('/add', async function(req, res, next) {
    try {
        console.log(`request ${req.body}`);
      res.send(await addCreditCardDetails(req.body));
    } catch (err) {
      console.log(typeof(err),err);
      res.json(500).json(err.message);
      next(err);
    }
  });
// Get end point to retrieve Credit Card detials
route.get('/get', async function (req,res,next){
    try {
        res.json(await getCreditCardDetails());
      } catch (err) {
        console.error(`Error while retrieving credit card Details`, err.message);
        next(err);
      }

})

route.listen(port, () => {
  console.log(`PSP app listening at http://localhost:${port}`);
});
