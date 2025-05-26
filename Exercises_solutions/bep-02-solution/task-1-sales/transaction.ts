type Warranty = {
    months: number;
};

type SalesRow = {
    productId: string;
    quantity: number;
    unitprice_cents: number;
    warranty?: Warranty;
};

type Transaction = {
    id: string;
    customerId: string;
    sellerId: string;
    date: string;
    items: SalesRow[];
};

export { Transaction };