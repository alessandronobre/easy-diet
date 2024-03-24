package com.devpro.mseasydiet.controller;

import com.devpro.mseasydiet.dto.PacienteDto;
import com.devpro.mseasydiet.service.PacienteService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://127.0.0.1:5500")
@AllArgsConstructor
@RestController
@RequestMapping("/api/paciente")
public class PacienteController {

    private final PacienteService pacienteService;

    @GetMapping("/{page}")
    public Page<PacienteDto> listar(@PathVariable int page) {
        return pacienteService.listar(page);
    }

    @GetMapping("/nome/{nome}/{page}")
    public Page<PacienteDto> listarPorNome(@PathVariable String nome, @PathVariable int page) {
        return pacienteService.listarPorNome(nome, page);
    }

    @GetMapping("/id/{id}")
    public PacienteDto buscaPorId(@PathVariable Long id) {
        return pacienteService.buscaPorId(id);
    }

    @PutMapping
    public PacienteDto editar(@RequestBody PacienteDto pacienteDto) {
        return pacienteService.editar(pacienteDto);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public PacienteDto cadastrar(@RequestBody PacienteDto pacienteDto) {
        return pacienteService.salvar(pacienteDto);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        pacienteService.deletar(id);
    }
}
