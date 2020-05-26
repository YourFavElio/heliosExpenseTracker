import React from "react";

function IncomeExpenses() {
    return(
    <div className="inc-exp-container">
        <div>
          <h4>Entrate</h4>
          <p id="money-plus" className="money plus">+$0.00</p>
        </div>
        <div>
          <h4>Spese</h4>
          <p id="money-minus" className="money minus">-$0.00</p>
        </div>
    </div>
    )
}

export default IncomeExpenses;