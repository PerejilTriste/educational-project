#!/usr/bin/env node

import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'fs';

import showInfo from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileName = process.argv[2];
// console.log(process.argv);
const content = fs.readFileSync(path.join(
  __dirname,
  '..',
  fileName,
), 'utf-8');

showInfo(content);

const allPositions = content.length-1
//просмотр меню
// console.log(allPositions);

// массив с выбранными позициями
let finalOrder = [1, 3, 5];

function arraySum(array){
let sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
    }
console.log(`Итоговая сумма: ${sum}`);
}



