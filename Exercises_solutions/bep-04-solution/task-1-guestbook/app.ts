import express, { Express, Request, Response, NextFunction } from 'express';
import path from 'path';

/*
 * To anyone reading this!
 * 
 * This is an **example implementation** meant as a reference.
 * Any real implementation should be more robust and completed.
 * Use this to solve issues in your own solution,
 * but make yours more complete and finished.
 */

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const messages: { name: string, message: string }[] = [
    { name: 'Alpha', message: 'Hi there!' },
    { name: 'Beta', message: 'Hello, World!' },
    { name: 'Charlie', message: 'Hey, everyone!' },
    { name: 'Delta', message: 'Good day!' },
    { name: 'Echo', message: 'Greetings!' },
    { name: 'Foxtrot', message: 'Howdy!' },
    { name: 'Golf', message: 'Salutations!' },
    { name: 'Hotel', message: 'Yo!' },
    { name: 'India', message: 'Hey!' },
    { name: 'Juliet', message: 'Hello!' },
    { name: 'Kilo', message: 'Hi!' },
    { name: 'Lima', message: 'Hello, there!' },
    { name: 'Mike', message: 'Hey, there!' },
    { name: 'November', message: 'Hi, there!' },
    { name: 'Oscar', message: 'Hello, there!' },
    { name: 'Papa', message: 'Hey, there!' },
    { name: 'Quebec', message: 'Hi, there!' },
    { name: 'Romeo', message: 'Hello, there!' },
    { name: 'Sierra', message: 'Hey, there!' },
    { name: 'Tango', message: 'Hi, there!' },
    { name: 'Uniform', message: 'Hello, there!' },
    { name: 'Victor', message: 'Hey, there!' },
    { name: 'Whiskey', message: 'Hi, there!' },
    { name: 'X-ray', message: 'Hello, there!' },
    { name: 'Yankee', message: 'Hey, there!' },
    { name: 'Zulu', message: 'Hi, there!' }
];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/guestbook', (req: Request, res: Response) => { //! Note, there is some TS weirdness here, not quite sure what's going on
    let data: { total: number, posts: any[] } = { total: messages.length, posts: [] };

    // The offset method is just one way of paginating the data
    if (typeof (req.query?.offset) === "string") {
        const offset: number = Number(req.query.offset);
        if (offset >= 0 && offset < messages.length) {
            data.posts = messages.slice(offset, offset + 10);
            return res.json(data);
        }
        return res.status(400).json({ error: 'Invalid offset' });
    }
    data.posts = messages.slice(0, 10);
    res.json(data);
});

app.post('/api/guestbook', (req: Request, res: Response) => {
    const { name, message } = req.body;
    //! TODO: Input validation
    messages.push({ name, message });
    res.sendStatus(201);
});

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).send('404: Page not found');
});

const port: number = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
