package org.example.aionystesttask.service.impl;

import lombok.RequiredArgsConstructor;
import org.example.aionystesttask.dto.NoteRequestDto;
import org.example.aionystesttask.dto.NoteResponseDto;
import org.example.aionystesttask.mapper.NoteMapper;
import org.example.aionystesttask.model.Note;
import org.example.aionystesttask.repository.NoteRepository;
import org.example.aionystesttask.service.NoteService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NoteServiceImpl implements NoteService {
    private final NoteRepository noteRepository;
    private final NoteMapper noteMapper;

    @Override
    public List<NoteResponseDto> getAll() {
        return noteRepository.findAll().stream()
                .map(noteMapper::toDto)
                .toList();
    }

    @Override
    public NoteResponseDto getById(Long id) {
        return noteMapper.toDto(findById(id));
    }

    @Override
    public NoteResponseDto create(NoteRequestDto noteRequestDto) {
        Note note = noteMapper.toEntity(noteRequestDto);
        return noteMapper.toDto(noteRepository.save(note));
    }

    @Override
    public NoteResponseDto update(Long id, NoteRequestDto noteRequestDto) {
        findById(id);
        Note note = noteMapper.toEntity(noteRequestDto);
        note.setId(id);
        return noteMapper.toDto(noteRepository.save(note));
    }

    @Override
    public void delete(Long id) {
        noteRepository.deleteById(id);
    }

    private Note findById(Long id) {
        return noteRepository.findById(id).orElseThrow(
                RuntimeException::new
        );
    }
}
