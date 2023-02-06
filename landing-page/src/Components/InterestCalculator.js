// Interest Calculator Component
import React from "react";
import "./InterestCalculator.css";

class InterestCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalCost: "0",
      months: "0",
      finalCost: "0",
      monthlyCost: "0",
    };

    this.calcOutput = this.calcOutput.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  // update of totalCost and months state
  handleInput(e) {
    const value = e.target.value;
    const id = e.target.id;

    if (id == "totalCost") {
      this.setState({
        totalCost: value,
      });
    } else {
      this.setState({
        months: value,
      });
    }
  }

  // calculation of costs after non-compound interest, trigger when calc button is pressed
  calcOutput = (e) => {
    e.preventDefault();
    const totalCostInput = Number(this.state.totalCost);
    const monthsInput = Number(this.state.months);
    const interestRate = 0.2;

    const interestAmount = totalCostInput * interestRate;
    const finalCost = totalCostInput + interestAmount;
    const monthlyCost = finalCost/monthsInput;


    this.setState({
      finalCost: finalCost,
      monthlyCost: monthlyCost,
    });
  };

  render() {
    return (
      <section className="interestCalcContainer">
        <h2 id="calcHeader">Non-Compound Interest Calculator</h2>
        <form className="interestCalcFormContainer" onSubmit={this.calcOutput}>
          <label for="totalCost" id="totalCostLabel">
            Total Cost:
          </label>
          <input
            type="number"
            id="totalCost"
            name="totalCost"
            onChange={this.handleInput}
          />
          <label for="months" id="monthsLabel">
            Number of Months:
          </label>
          <input
            type="number"
            id="months"
            name="months"
            onChange={this.handleInput}
          />
          <input type="submit" value="Calc" id="calcButton" />
          <output id="monthlyCostOutput">
            <b>Monthly Cost:</b> {this.state.monthlyCost}
          </output>
          <output id="finalCostOutput">
            <b>Final Cost:</b> {this.state.finalCost}
          </output>
        </form>
      </section>
    );
  }
}

export default InterestCalculator;
