function gerarCpf() {
    const gerarDigitoVerificador = (cpfBase) => {
        const multiplicadores1 = [10, 9, 8, 7, 6, 5, 4, 3, 2];
        const multiplicadores2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

        const calcularDigito = (multiplicadores) => {
            let soma = 0;
            for (let i = 0; i < multiplicadores.length; i++) {
                soma += cpfBase[i] * multiplicadores[i];
            }
            const resto = soma % 11;
            return resto < 2 ? 0 : 11 - resto;
        };

        const digito1 = calcularDigito(multiplicadores1);
        cpfBase.push(digito1);
        const digito2 = calcularDigito(multiplicadores2);
        cpfBase.push(digito2);
        
        return [digito1, digito2];
    };

    // Gerar os 9 primeiros dígitos aleatórios
    const cpfBase = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));
    
    // Calcular os dígitos verificadores
    const [digito1, digito2] = gerarDigitoVerificador(cpfBase);
    
    // Gerar CPF completo
    return `${cpfBase.join('')}-${digito1}${digito2}`;
}

// Testar o gerador de CPF
console.log(gerarCpf());