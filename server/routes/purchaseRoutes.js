const purchaseHandler = require("../controllers/purchaseController");
const auth = require("../middleware/auth");

module.exports = function (app) {
     app.route("/purchase").get(purchaseHandler.getPurchase).post(purchaseHandler.addPurchase);
     app.route("/purchase/:id").delete(purchaseHandler.removePurchase);
     app.route("/purchase/total").get(purchaseHandler.getTotal)
};

