package org.example.aionystesttask.dto;

import lombok.Data;

@Data
public class NoteResponseDto {
    private Long id;
    private String title;
    private String content;
    private Boolean isCompleted;
}
