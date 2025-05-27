import puppeteer from 'puppeteer';

/**
 * Convert HTML to PDF
 * @param html String of HTML content
 * @returns Promise<Buffer> PDF buffer
 */
export default async function htmlToPdf(html: string): Promise<Buffer> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(html);
    const data = await page.pdf({ format: 'A4' });

    await browser.close();

    return Buffer.from(data);
}
