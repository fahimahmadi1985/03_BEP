# Task 1

This exercise is about practicing building a REST API backend.

Your task is to build a sales reporting API that will take in and manage sales data. Use `TypeScript` and `Express` with `bun` to build the API. Store the data in a file called `db.json`.

The data for one sales transaction will look like this:

```json
{
  "id": "1",
  "customerId": "de-0005123412 Ionvannis Popescu",
  "sellerId": "99941223 Alexandra Shmidt",
  "datetime": "2024-10-21T12:42:13Z",
  "salesRows": [
    {
      "productId": "152",
      "quantity": 2,
      "unitprice_cents": 19900
    },
    {
      "productId": "23221",
      "quantity": 1,
      "unitprice_cents": 56699,
      "warranty": {
        "months": 24
      }
    }
  ]
}
```

The API should have the following endpoints:

- `POST /sales` - to create a new sale
- `GET /sales` - to get all sales
- `GET /sales/:id` - to get a sale by id
- `DELETE /sales` - to delete all sales
- `DELETE /sales/:id` - to delete a specific sale
- `PUT /sales/:id` - to update a specific sale

## Theory

Add your answer below. Imagine that customers would be able to return their purchases within 14 days. How would you modify the API to handle this?

Make two different suggestions on how to handle this. You don't need to implement these suggestions, just describe them. For the first solution, you are allowed to change the data structure of the sales data entries. For the second solution, you should keep the data structure as it is.

## Optional bonus exercise

Add one more endpoint: `GET /report`.

When this endpoint is called, the API should generate and respond with a PDF report with the following information:
- Total amount of items sold
- Total revenue
- Total amount of sales per customer, order by top customers
- Total amount of sales per seller, order by top sellers
