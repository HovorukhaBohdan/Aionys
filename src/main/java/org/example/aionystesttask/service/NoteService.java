package org.example.aionystesttask.service;

import org.example.aionystesttask.dto.NoteRequestDto;
import org.example.aionystesttask.dto.NoteResponseDto;
import org.example.aionystesttask.exception.EntityNotFoundException;

import java.util.List;

public interface NoteService {
    List<NoteResponseDto> getAll();

    NoteResponseDto getById(Long id) throws EntityNotFoundException;

    NoteResponseDto create(NoteRequestDto noteRequestDto);

    NoteResponseDto update(Long id, NoteRequestDto noteRequestDto) throws EntityNotFoundException;

    void delete(Long id);
}
