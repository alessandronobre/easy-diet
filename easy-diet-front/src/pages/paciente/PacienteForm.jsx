import React, { useState } from "react";
import { formatPeso } from '../../data/service/formatter';
import styles from '/src/pages/paciente/pacienteForm.module.css';
import SaveButton from '/src/components/buttons/SaveButton.jsx';

export default function PacienteForm() {
    const [formData, setFormData] = useState({
        nome: "",
        idade: "",
        email: "",
        genero: "",
        altura: "",
        peso: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "peso") {
            const formattedPeso = formatPeso(value);
            setFormData((prevData) => ({ ...prevData, peso: formattedPeso }));
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dados do formulário:", formData);
        // Você pode enviar os dados para o servidor aqui
    };

    return (
        <>
            <div class="form_title" className={styles.form_title}>
                <h1>Formulário de Cadastro</h1>
            </div>
            <form onSubmit={handleSubmit}>
                {/* Nome */}
                <label htmlFor="nome">Nome:</label><br />
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required /><br /><br />

                {/* Idade */}
                <label htmlFor="idade">Idade:</label><br />
                <input
                    type="number"
                    id="idade"
                    name="idade"
                    value={formData.idade}
                    onChange={handleChange}
                    min="0"
                    required /><br /><br />

                {/* Email */}
                <label htmlFor="email">Email:</label><br />
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required /><br /><br />

                {/* Gênero */}
                <label htmlFor="genero">Gênero:</label><br />
                <select
                    id="genero"
                    name="genero"
                    value={formData.genero}
                    onChange={handleChange}
                    required>
                    <option value="" disabled>Selecione...</option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                </select><br /><br />

                {/* Altura */}
                <label htmlFor="altura">Altura (em cm):</label><br />
                <input
                    type="number"
                    id="altura"
                    name="altura"
                    value={formData.altura}
                    onChange={handleChange}
                    min="0"
                    step="0.01"
                    required /><br /><br />

                {/* Peso */}
                <label htmlFor="peso">Peso (em kg):</label><br />
                <input
                    type="text"
                    id="peso"
                    name="peso"
                    value={formData.peso}
                    onChange={handleChange}
                    maxLength={4}
                    required /><br /><br />

                {/* Botão de Salvar */}
                <SaveButton />
            </form>
        </>
    )
}

