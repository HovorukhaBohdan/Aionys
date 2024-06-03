package org.example.aionystesttask.mapper;

import org.example.aionystesttask.config.MapperConfig;
import org.example.aionystesttask.dto.NoteRequestDto;
import org.example.aionystesttask.dto.NoteResponseDto;
import org.example.aionystesttask.model.Note;
import org.mapstruct.Mapper;

@Mapper(config = MapperConfig.class)
public interface NoteMapper {
    NoteResponseDto toDto(Note note);

    Note toEntity(NoteRequestDto noteRequestDto);
}
