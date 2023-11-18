// Обработчик сообщений от основного потока
onmessage = function (event) {
    const num1 = event.data.num1;
    const num2 = event.data.num2;

    // Выполняем сложение
    const sum = num1 + num2;

    // Отправляем результат обратно основному потоку
    postMessage(sum);
};
