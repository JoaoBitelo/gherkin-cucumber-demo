import io.cucumber.java.en.*;
import src.models.PanamahVenda;
import org.json.JSONObject;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class VendaStepDefinitions {
    private PanamahVenda sale = new PanamahVenda();
    private boolean isValid = false;

    @Given("a sale as follow:")
    public void a_sale_as_follow(String docString) {
    JSONObject jsonObj = new JSONObject(docString);

    String assinanteId = null;
    if(jsonObj.has("assinanteId")) {
    assinanteId = jsonObj.getString("assinanteId");
    }

    String id = null;
    if(jsonObj.has("id")) {
    id = jsonObj.getString("id");
    }

    sale.setAssinanteId(assinanteId);
    sale.setId(id);
    }

    @When("Its validated")
    public void its_validated() {
    this.isValid = sale.validate();
    }

    @Then("The result should be {string}")
    public void the_result_should_be(String string) {
    assertEquals(string, String.valueOf(this.isValid));
    }

}
