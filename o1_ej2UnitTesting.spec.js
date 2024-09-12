/*
En una fábrica de tanques de agua en acero y inoxidable necesitan calcular de forma rápida el volúmen de los tanques. 
Dados el diámetro y la altura retornar el volúmen. La función debe cumplir con los siguientes requerimientos:

El resultado debe ser expresado en litros.
Los datos de entrada pueden ser en cm o en m.
*/

function calculateVolume(diameter, height, cmOm) {
  if (cmOm === 1) {
    const radio = diameter / 2;
    const volumeCm3 = Math.PI * Math.pow(radio, 2) * height;
    const volume = volumeCm3 / 1000;
    return Math.round(volume);
  } else {
    const radio = diameter / 2;
    const volume = Math.round(Math.PI * Math.pow(radio, 2) * height * 1000);
    return volume;
  }
}

test("100cm of diameter and 150cm of height", () => {
  expect(calculateVolume(100, 150, 1)).toBe(1178);
});

test("200cm of diameter and 300cm of height", () => {
  expect(calculateVolume(200, 300, 1)).toBe(9425);
});

test("2m of diameter and 3m of height", () => {
  expect(calculateVolume(2, 3, 0)).toBe(9425);
});

test("0.5m of diameter and 1m of height", () => {
  expect(calculateVolume(0.5, 1, 0)).toBe(196);
});

test("50cm of diameter and 75cm of height", () => {
  expect(calculateVolume(50, 75, 1)).toBe(147);
});
