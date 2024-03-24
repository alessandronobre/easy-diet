package com.devpro.mseasydiet.repository;

import com.devpro.mseasydiet.model.Paciente;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PacienteRepository extends JpaRepository<Paciente, Long> {

    @Query(value = "SELECT * FROM PACIENTE WHERE COD_PACIENTE = ?", nativeQuery = true)
    Paciente buscaPorId(Long id);

    @Query(value = "SELECT * FROM PACIENTE WHERE NOME LIKE %?%", nativeQuery = true)
    Page<Paciente> listarPorNome(String nome, Pageable pageable);
}
