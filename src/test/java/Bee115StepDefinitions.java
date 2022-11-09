


import io.cucumber.java.en.*;
import src.Calculator;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.nio.charset.Charset;

class Bee115StepDefinitions {
    private String input;
    private String actual;

    @Given("the input is")
    public void the_input_is(String docString) {
        this.input = docString;
    }

    @When("the program runs")
    public void the_program_runs() throws IOException {
        ByteArrayInputStream inputStream = new ByteArrayInputStream(this.input.getBytes(Charset.forName("UTF-8")));

        ByteArrayOutputStream baos = new ByteArrayOutputStream();

        String s = Calculator.calculate(inputStream);
        int count = 0;

        while (count < s.length()) {
            baos.write(s.charAt(count));
            count++;
        }

        PrintStream outputStream = new PrintStream(baos);
        System.setIn(inputStream);
        System.setOut(outputStream);

        // Main.main(null);

        this.actual = baos.toString();
        inputStream.close();
        outputStream.close();

    }

    @Then("the output should be")
    public void the_output_should_be(String expected) {
        assertEquals(expected, this.actual);
    }
}
