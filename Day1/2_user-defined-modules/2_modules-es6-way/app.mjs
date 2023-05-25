import Employee from "./lib.mjs";
import { test } from './test.cjs';

let e1 = new Employee("Manish");
console.log(e1.getName());
e1.setName("Ramakant");
console.log(e1.getName());

test();