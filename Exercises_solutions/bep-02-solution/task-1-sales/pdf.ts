import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import { Transaction } from './transaction'

/*

Note: because this is for a bonus challenge,
the code here is just a pointer in the right direction.

*/

export async function createPdf(data: Transaction[]): Promise<Uint8Array> {
    const pdfDoc = await PDFDocument.create()
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

    const page = pdfDoc.addPage()
    const { width, height } = page.getSize()
    const fontSize = 30

    // The coordinate system in PDFs is a bit strange
    // x: 0, y:0 is the bottom left corner
    // You get used to it :)
    page.drawText('PDFs in JS/TS!', {
        x: 0,
        y: height - fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0, 0.53, 0.71),
    })

    const pdfBytes = await pdfDoc.save()
    return pdfBytes
}