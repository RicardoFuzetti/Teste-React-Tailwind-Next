'use client'

import { useEffect, useState } from "react";

export function PersonName() {
    const strings = [
        'Ricardo Fuzetti',
        'Lucas Lima',
        'Maycon Rodrigues',
        'Marcos Vinicius',
        'Paulo Navegante',
        'Eduardo Zotto',
        'Rafael Maranhão'
    ];

    const [nomePessoa, setNomePessoa] = useState<string>('');

    useEffect(() => {
        const indiceAleatorio = Math.floor(Math.random() * strings.length);
        const pessoaSelecionada = strings[indiceAleatorio];
        setNomePessoa(pessoaSelecionada);
    }, []);

    return (
        <p>
            {nomePessoa}
        </p>
    )
}