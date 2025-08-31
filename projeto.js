// Usando prompt-sync para capturar entradas no Node.js
const prompt = require("prompt-sync")();

// Laço para permitir testar vários heróis
for (let i = 0; i < 3; i++) {  // aqui coloquei 3 como exemplo de repetições
    let nome = prompt("Digite o nome do herói: ");
    let xp = parseInt(prompt("Digite a quantidade de experiência (XP): "));

    let nivel = "";

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else if (xp >= 10001) {
        nivel = "Radiante";
    }

    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}
