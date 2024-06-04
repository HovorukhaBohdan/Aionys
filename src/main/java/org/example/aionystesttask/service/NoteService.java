package org.example.aionystesttask.service;

import java.util.List;
import org.example.aionystesttask.dto.NoteRequestDto;
import org.example.aionystesttask.dto.NoteResponseDto;
import org.example.aionystesttask.exception.EntityNotFoundException;

public interface NoteService {
    List<NoteResponseDto> getAll();

    NoteResponseDto getById(Long id) throws EntityNotFoundException;

    NoteResponseDto create(NoteRequestDto noteRequestDto);

    NoteResponseDto update(Long id, NoteRequestDto noteRequestDto) throws EntityNotFoundException;

    void delete(Long id);
}
