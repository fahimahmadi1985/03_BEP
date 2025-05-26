import express from 'express';
import { Transaction } from './transaction.ts';
import { read, write } from './io.ts';
import { createPdf } from './pdf.ts';

const app = express();
app.use(express.json());

// This is a helper endpoint to generate some dummy data
app.get("/dummy", (req, res) => {
    res.send("Generating dummy data");

    const data: Transaction[] = [
        {
            id: '1',
            date: new Date().toISOString(),
            customerId: 'de-00000512221',
            sellerId: 'de-00090004282',
            items: [
                { productId: '004211', quantity: 2, unitprice_cents: 19999 },
            ],
        },
        {
            id: '2',
            date: new Date().toISOString(),
            customerId: 'de-00000512221',
            sellerId: 'de-00090004282',
            items: [
                { productId: '004211', quantity: 2, unitprice_cents: 19999 },
                { productId: '004212', quantity: 1, unitprice_cents: 29999 },
            ],
        },
        {
            id: '3',
            date: new Date().toISOString(),
            customerId: 'de-00000512221',
            sellerId: 'de-00090004282',
            items: [
                { productId: '004211', quantity: 2, unitprice_cents: 19999 },
                { productId: '004212', quantity: 1, unitprice_cents: 4999 },
                { productId: '004213', quantity: 1, unitprice_cents: 10099 },
            ],
        },
    ];
    write(data);
})

// - `POST /sales` - to create a new sale
app.post('/sales', (req, res) => {
    const newSale: Transaction = req.body;
    const data = read();
    data.push(newSale);
    write(data);
    res.sendStatus(201);
})

// - `GET /sales` - to get all sales
app.get('/sales', (req, res) => {
    res.json(read());
})

// - `GET /sales/:id` - to get a sale by id
app.get('/sales/:id', (req, res) => {
    const id = req.params.id;
    const sale = read().find(sale => sale.id === id);
    if (sale) {
        res.json(sale);
    } else {
        res.sendStatus(404);
    }
})

// - `DELETE /sales` - to delete all sales
app.delete('/sales', (req, res) => {
    write([]);
    res.sendStatus(204);
})

// - `DELETE /sales/:id` - to delete a specific sale
app.delete('/sales/:id', (req, res) => {
    const id = req.params.id;
    const data = read();
    const index = data.findIndex(sale => sale.id === id);
    if (index !== -1) {
        data.splice(index, 1);
        write(data);
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
})

// - `PUT /sales/:id` - to update a specific sale
app.put('/sales/:id', (req, res) => {
    const id = req.params.id;
    const data = read();
    const index = data.findIndex(sale => sale.id === id);
    if (index !== -1) {
        data[index] = req.body;
        write(data);
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
})

// curl -X GET http://localhost:3000/report --output report.pdf
app.get('/report', async (req, res) => {
    const data = read();

    // Generate report PDF
    const pdf: Uint8Array = await createPdf(data);

    // Convert Uint8Array to Buffer
    const buffer = Buffer.from(pdf);

    // Send the PDF as a response
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=report.pdf');
    res.send(buffer);
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});