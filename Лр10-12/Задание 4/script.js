function calculateY(a, x) {
    let y;
    try {
        if (x >= 2) {
            if (a + x < 0) throw "Корень из отрицательного числа";
            y = x * x - 2.5 + Math.sqrt(a + x);
        } else if (x >= 0 && x < 2) {
            if (a < 0) throw "Корень из отрицательного числа";
            y = 2 + Math.sqrt(a) - x / 4;
        } else if (x < 0) {
            y = 0.3 * x;
        } else {
            throw "Неизвестное состояние";
        }
    } catch (error) {
        alert("Ошибка: " + error);
        return null;
    }
    return y;
}
