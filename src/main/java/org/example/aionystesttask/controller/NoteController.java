package org.example.aionystesttask.controller;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.example.aionystesttask.dto.NoteRequestDto;
import org.example.aionystesttask.dto.NoteResponseDto;
import org.example.aionystesttask.exception.EntityNotFoundException;
import org.example.aionystesttask.service.NoteService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/notes")
@RequiredArgsConstructor
public class NoteController {
    private final NoteService noteService;

    @GetMapping
    public List<NoteResponseDto> getAllNotes() {
        return noteService.getAll();
    }

    @GetMapping("/{id}")
    public NoteResponseDto getNoteById(@PathVariable Long id)
            throws EntityNotFoundException {
        return noteService.getById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public NoteResponseDto createNote(@RequestBody NoteRequestDto noteRequestDto) {
        return noteService.create(noteRequestDto);
    }

    @PutMapping("/{id}")
    public NoteResponseDto updateNote(
            @PathVariable Long id,
            @RequestBody NoteRequestDto noteRequestDto
    ) throws EntityNotFoundException {
        return noteService.update(id, noteRequestDto);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteNote(@PathVariable Long id) {
        noteService.delete(id);
    }
}
