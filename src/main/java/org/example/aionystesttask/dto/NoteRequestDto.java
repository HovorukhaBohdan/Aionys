package org.example.aionystesttask.dto;

import lombok.Data;

@Data
public class NoteRequestDto {
    private String title;
    private String content;
    private Boolean isCompleted;
}
