// src/main/java/com/panaderia/backend/dto/DetalleVentaDTO.java
package com.panaderia.backend.dto;

import lombok.Data;

@Data
public class DetalleVentaDTO {
    private Integer producto_id;
    private Integer cantidad;
    private Double precio_unitario;
    private String descripcion;
}