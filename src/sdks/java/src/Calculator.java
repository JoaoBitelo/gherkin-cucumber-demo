package src;
import java.io.ByteArrayInputStream;

public class Calculator {
    private Calculator() {
        throw new IllegalStateException("Utility class");
    }

    static String sum(String value1, String value2) {
        int X = Integer.parseInt(value1);
        int Y = Integer.parseInt(value2);
        int sum = 0;
        int hits = 0;

        while (hits < Y) {
            if (X % 2 != 0) {
                sum += X;
                hits++;
            }
            X++;
        }

        return String.valueOf(sum);
    }

    public static String calculate(ByteArrayInputStream inputstream) {
        String error = "Parametros invalidos";
        try {
            String answer = "";

            // Get test case size
            int data = inputstream.read();
            int size = Character.getNumericValue((char) data);

            // Ignore first \n
            data = inputstream.read();

            for (int i = 0; i < size; i++) {
                // Get X
                String X = "";
                data = inputstream.read();
                char tempData = (char) data;
                while (Character.isDigit(tempData)) {
                    X += tempData;
                    data = inputstream.read();
                    tempData = (char) data;
                }
                // Get Y
                String Y = "";
                data = inputstream.read();
                tempData = (char) data;
                while (Character.isDigit(tempData)) {
                    Y += tempData;
                    data = inputstream.read();
                    tempData = (char) data;
                }

                if (!answer.contentEquals("")) {
                    answer += "\n";
                }
                answer += sum(X, Y);
            }

            if (data != -1) {
                answer = error;
            }

            return answer;
        } catch (Exception e) {
            return error;
        }
    }
}