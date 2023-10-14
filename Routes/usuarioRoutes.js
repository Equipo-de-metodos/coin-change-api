import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  let monto = Number(req.body.monto);
  const monedasDisponibles = [1,5,10,25,50,100]
  let cambioMonedas = []

  if(monto >= 100){
    let queda = Math.trunc(monto / 100)
    cambioMonedas.push({moneda: 100, cantidad: queda})
    monto = monto % 100
  }

  if(monto >= 50){
    let queda = Math.trunc(monto / 50)
    cambioMonedas.push({moneda: 50, cantidad: queda})
    monto = monto % 50
  }

  if(monto >= 25){
    let queda = Math.trunc(monto / 25)
    cambioMonedas.push({moneda: 25, cantidad: queda})
    monto = monto % 25
  }

  if(monto >= 10){
    let queda = Math.trunc(monto / 10)
    cambioMonedas.push({moneda: 10, cantidad: queda})
    monto = monto % 10
  }

  if(monto >= 5){
    let queda = Math.trunc(monto / 5)
    cambioMonedas.push({moneda: 5, cantidad: queda})
    monto = monto % 5
  }
  
  if(monto >= 1){
    let queda = Math.trunc(monto / 1)
    cambioMonedas.push({moneda: 1, cantidad: queda})
    monto = monto % 1
  }
  res.json({cambioMonedas});
});

export default router;