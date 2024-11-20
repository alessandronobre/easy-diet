import api from '/src/service/api/ApiConfig/apiService.js';

const pacienteService = {
  listar: async () => {
    const response = await api.get('/pacientes');
    return response.data;
  },

  buscarPorId: async (id) => {
    const response = await api.get(`/pacientes/${id}`);
    return response.data;
  },

  criar: async (paciente) => {
    const response = await api.post('/pacientes', paciente);
    return response.data;
  },

  atualizar: async (id, paciente) => {
    const response = await api.put(`/pacientes/${id}`, paciente);
    return response.data;
  },

  deletar: async (id) => {
    const response = await api.delete(`/pacientes/${id}`);
    return response.data;
  },
};

export default pacienteService;