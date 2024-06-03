package org.example.aionystesttask.service;

import org.example.aionystesttask.dto.NoteRequestDto;
import org.example.aionystesttask.dto.NoteResponseDto;

import java.util.List;

public interface NoteService {
    List<NoteResponseDto> getAll();

    NoteResponseDto getById(Long id);

    NoteResponseDto create(NoteRequestDto noteRequestDto);

    NoteResponseDto update(Long id, NoteRequestDto noteRequestDto);

    void delete(Long id);
}
