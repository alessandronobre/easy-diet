package com.devpro.mseasydiet.mapper;

import com.devpro.mseasydiet.dto.PacienteDto;
import com.devpro.mseasydiet.model.Paciente;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PacienteMapper {

    PacienteDto pacienteToDto(Paciente paciente);

    Paciente dtoToPaciente(PacienteDto pacienteDto);
}
