import fs from 'fs'
import { Transaction } from './transaction'

const path:string = 'db.json'

export function write(data:Transaction[]): void {
    fs.writeFileSync(path, JSON.stringify(data,null,2), 'utf8')
}

export function read(): Transaction[] {
    return JSON.parse(fs.readFileSync(path, 'utf8'))
}