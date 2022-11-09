import { binding, given, then, when } from "cucumber-tsflow";
import { assert } from "chai";
import Sale from "../../sdks/javascript/src/models/sale";

@binding()
export class VendaSteps {
  private sale?: Sale;
  private validationResult: { valid: boolean; errors: any[] } | undefined;

  @given("a sale as follow:")
  public receiveSale(docString: string): void {
    this.sale = JSON.parse(docString);
  }

  @when("Its validated")
  public validate(): void {
    // console.log(Sale.validateSale(this.sale)?.errors);
    this.validationResult = Sale.validateSale(this.sale);
  }

  @then("The result should be {string}")
  public shouldBeTrue(string: string): void {
    const isValid = this.validationResult?.valid;
    assert.equal(JSON.stringify(isValid), string);
  }
}
