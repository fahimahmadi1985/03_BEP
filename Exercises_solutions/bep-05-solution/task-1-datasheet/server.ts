import express, { Express, Request, Response } from 'express';
import htmlToPdf from './html-to-pdf.ts';
import path from 'path';

//! **HINT**:
import { productSearch } from './product-search.ts';

const app: Express = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files
// If a matching file is not found, the request will be forwarded to the next middleware
app.use(express.static(path.join(__dirname, 'public')));

app.get('/datasheet/:productCode', (req: Request, res: Response) => {
    const productCode: string = req.params.productCode;
    const product = productSearch(productCode)
    if (!product) {
        res.sendStatus(404);
        return;
    }
    res.render('datasheet', { product });
});

app.get('/datasheet-pdf/:productCode', async (req: Request, res: Response) => {
    const productCode: string = req.params.productCode;
    const html = await fetch('http://localhost:9000/datasheet/' + productCode).then(res => res.text());
    const pdf = await htmlToPdf(html);

    res.setHeader('Content-Type', 'application/pdf');
    res.send(pdf);
});

// Start the server
app.listen(9000, () => {
    console.log(`Server is running on port 9000`);
});
