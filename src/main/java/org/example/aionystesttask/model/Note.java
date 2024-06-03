package org.example.aionystesttask.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.SQLRestriction;

@Entity
@Data
@Table(name = "notes")
@SQLDelete(sql = "UPDATE notes SET is_deleted = true WHERE id = ?")
@SQLRestriction("is_deleted = 'false'")
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private String content;
    @Column(nullable = false, name = "is_completed")
    private Boolean isCompleted = false;
    @Column(nullable = false, name = "is_deleted")
    private Boolean isDeleted = false;
}
