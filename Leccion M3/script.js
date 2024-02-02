let NicolásII = { name: "NicolásII"};
let Alejandra = { name: "Alejandra"};
let lives = 2;

function startGame() {
    alert("¡Bienvenido al juego de Nicolás II y Alejandra! Tienes 2 vidas. Por cada respuesta incorrecta, perderás una vida.");

    for (let i = 1; i <= 6; i++) {
        const question = `Pregunta ${i}: ${getQuestion(i)}`;
        const options = getOptions(i);
        const answer = prompt(`${question}\n${options.join('\n')}`);

        if (i === 6 && checkAnswer(i, answer)) {
            alert("¡Felicidades! Has logrado salvar a Nicolás II y Alejandra.");
            break;
        }

        if (!checkAnswer(i, answer)) {
            lives--;

            if (lives === 0) {
                alert("Garbage Collection: ¡Eliminando a Nicolás II y Alejandra!");
                
                
                break;
            } else {
                alert(`Respuesta incorrecta. Te quedan ${lives} vidas.`);
                console.log(NicolásII);
                NicolásII = null;
                Alejandra = null;
                console.log(NicolásII);
                console.log(Alejandra);
            }
        } else {
            alert("¡Respuesta correcta! Sigamos con la siguiente pregunta.");
            
        }
    }
}

function getQuestion(index) {
    switch (index) {
        case 1: return "¿Cuál fue el título oficial de Nicolás II?";
        case 2: return "¿Cuál era el nombre completo de Alejandra?";
        case 3: return "¿En qué año tuvo lugar la Revolución Rusa?";
        case 4: return "¿Cuál fue el destino final de Nicolás II y su familia?";
        case 5: return "¿Cuál es la capital de Rusia?";
        case 6: return "¿Quieres intentar salvar a Nicolás II y Alejandra?";
    }
}

function getOptions(index) {
    switch (index) {
        case 1: return ['Emperador', 'Rey', 'Presidente'];
        case 2: return ['Alexandra Feodorovna', 'Anastasia Nikolaevna', 'Olga Nikolaevna'];
        case 3: return ['1917', '1905', '1921'];
        case 4: return ['Exilio en Europa', 'Fusilados en 1918', 'Huida a América'];
        case 5: return ['Moscú', 'San Petersburgo', 'Kiev'];
        case 6: return ['Sí', 'No'];
    }
}

function checkAnswer(index, answer) {
    switch (index) {
        case 1: return answer.toLowerCase() === 'emperador';
        case 2: return answer.toLowerCase() === 'alexandra feodorovna';
        case 3: return answer === '1917';
        case 4: return answer.toLowerCase() === 'fusilados en 1918';
        case 5: return answer.toLowerCase() === 'moscú';
        case 6: return answer.toLowerCase() === 'sí';
    }
}