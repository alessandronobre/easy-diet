/**
 * Formata um valor de peso no formato "XX.X"
 * @param {string} value - O valor a ser formatado.
 * @returns {string} O valor formatado.
 */
export const formatPeso = (value) => {
    // Remove caracteres inválidos (não números e não ponto)
    const sanitizedValue = value.replace(/[^0-9.]/g, "");
  
    // Se houver mais de dois números antes do ponto, insere automaticamente o ponto
    const formattedValue = sanitizedValue.replace(/^(\d{2})(\d)/, "$1.$2");
  
    // Retorna o valor limitado a 4 caracteres
    return formattedValue.slice(0, 4);
  };