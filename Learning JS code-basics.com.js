//1.Наберите в редакторе код из задания символ в символ и нажмите «Проверить».
console.log('Hello, World!');

//2. Создайте однострочный комментарий с текстом: You know nothing, Jon Snow!.
// You know nothing, Jon Snow!

/*3. Выведите на экран друг за другом три имени: Robert, Stannis, Renly. В результате на экране должно отобразиться:
Robert
Stannis
Renly*/
console.log("Robert");
console.log("Stannis");
console.log("Renly");

//4.Просто тренировка. Выведите на экран число 9780262531962.
console.log(9780262531962)

//5. Выведите на экран What Is Dead May Never Die
console.log("What Is Dead May Never Die");

//6. Выведите на экран результат деления числа 81 на 9.
console.log(81 / 9);

//7. Напишите программу, которая посчитает разность между числами 6 и -81 и выведет ответ на экран.
console.log(6 - -81);

//8. Напишите программу, которая считает и выводит последовательно на экран значения следующих математических выражений: «3 в степени 5» и «-8 разделить на -4».
console.log(3 ** 5);
console.log(-8 / -4);

/*9. Реализуйте программу, которая вычисляет и выводит на экран значение выражения:
8 / 2 + 5 - -3 / 2*/
console.log(8 / 2 + 5 - -3 / 2);

/*10. Дано выражение 70 * 3 + 4 / 8 + 2.
Расставьте скобки так, чтобы оба сложения (3 + 4) и (8 + 2) высчитывались в первую очередь. Выведите результат на экран.*/
console.log(70 * (3 + 4) / (8 + 2))

//11. Вычислите и выведите на экран произведение двух чисел: 0.39 и 0.22
console.log(0.39 * 0.22);

//12. Распечатайте на экран сумму бесконечностей, поделенную на 10
console.log(Infinity / 10);

//13. Выполните операцию, которая приводит к NaN, и распечатайте её результат на экран с помощью console.log().
console.log(NaN * 23);

/*14. Выведите на экран результат следующего вычисления: «разница между пятью в квадрате и произведением трёх и семи».
Расставьте скобки таким образом, чтобы не нарушать правило no-mixed-operators.*/
console.log((5 ** 2) - (3 * 7));

/*15. Напишите программу, которая выведет на экран:
"Khal Drogo's favorite word is "athjahakar""*/
console.log('"Khal Drogo\'\s favorite word is "athjahakar""')

/*16.Напишите программу, которая выводит на экран:
- Did Joffrey agree?
- He did. He also said "I love using \n".
При этом программа использует только один console.log(), но результат на экране должен выглядеть в точности, как показано выше.*/
console.log('- Did Joffrey agree?\n- He did. He also said "I love using \\n".');

/*17. Выведите на экран 
Winter came for the House of Frey. 
используя конкатенацию слов.*/
console.log("Winter came for " + "the House of Frey.")


//18. Найдите в интернете таблицу кодов ASCII и выведите на экран символы ~, ^ и % (каждый на своей собственной строке).
console.log(String.fromCharCode(126));
console.log(String.fromCharCode(94));
console.log(String.fromCharCode(37));