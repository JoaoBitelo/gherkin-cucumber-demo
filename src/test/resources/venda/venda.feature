Feature: Venda
  Scenario: Perfect sale
    Given a sale as follow:
    """
    {
        "assinanteId": "123",
        "id": "123"
    }
    """
    When Its validated
    Then The result should be "true"

  Scenario: Bad sale
    Given a sale as follow:
    """
    {
        "assinanteId": "123"
    }
    """
    When Its validated
    Then The result should be "false"