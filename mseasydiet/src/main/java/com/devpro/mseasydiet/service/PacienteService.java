package com.devpro.mseasydiet.service;

import com.devpro.mseasydiet.dto.PacienteDto;
import com.devpro.mseasydiet.mapper.PacienteMapper;
import com.devpro.mseasydiet.repository.PacienteRepository;
import com.devpro.mseasydiet.util.PaginacaoUtils;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class PacienteService {

    private final PacienteRepository pacienteRepository;
    private final PacienteMapper pacienteMapper;

    public PacienteDto buscaPorId(Long id) {
        var aluno = pacienteRepository.buscaPorId(id);
        return pacienteMapper.pacienteToDto(aluno);
    }

    public Page<PacienteDto> listar(int page) {
        var pacientes = pacienteRepository.findAll(PaginacaoUtils.instanciaPageable(page, 5, "nome"));

        Page<PacienteDto> listaAlunosDto = pacientes.map(paciente -> pacienteMapper.pacienteToDto(paciente));

        return listaAlunosDto;
    }

    public Page<PacienteDto> listarPorNome(String nome, int page) {
        var pacientes = pacienteRepository.listarPorNome(nome, PaginacaoUtils.instanciaPageable(page, 5, "nome"));

        Page<PacienteDto> listaAlunosDto = pacientes.map(aluno -> pacienteMapper.pacienteToDto(aluno));

        return listaAlunosDto;
    }

    public PacienteDto editar(PacienteDto pacienteDto) {
        var paciente = pacienteRepository.buscaPorId(pacienteDto.getId());
        paciente = pacienteMapper.dtoToPaciente(pacienteDto);
        pacienteRepository.save(paciente);

        return pacienteMapper.pacienteToDto(paciente);
    }

    public PacienteDto salvar(PacienteDto pacienteDto) {
        var paciente = pacienteRepository.save(pacienteMapper.dtoToPaciente(pacienteDto));
        return pacienteMapper.pacienteToDto(paciente);
    }

    public void deletar(Long id) {
        pacienteRepository.deleteById(id);
    }
}
