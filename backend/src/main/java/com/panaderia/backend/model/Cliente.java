package com.panaderia.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "clientes")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nombres;

    @Column(nullable = false)
    private String email;

    private String telefono;

    private String direccion;

    @Column(nullable = false)
    private String password;
}
