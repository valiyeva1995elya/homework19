var arr = [{}, {}, {}];
for (var i = 0; i < arr.length; i++) {
    arr[i].saySmth = function () {
        console.log(i)
    }
    console.log(i)
}
arr[2].saySmth();

for (let i = 0; i < arr.length; i++) {
    arr[i].saySmth = function () {
        console.log(i)
    }
}
arr[0].saySmth();

/* Главное отличие у var и let - это область видимости, у var она глобальная, у let блочная.
При использовании цикла, у var при последующей итерации i не изменяется, у let дела обстоят иначе, при каждой последующей итерации i обновляется, в связи с чем, при вызове console.log(i), там где объявлена переменная через var, [i] будет неизменна и будет равна 3, а через let, [i] будет менятся в зависимости от заданной нами i
*/

