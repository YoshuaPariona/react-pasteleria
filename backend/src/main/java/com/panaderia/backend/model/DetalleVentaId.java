package com.panaderia.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.*;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor
public class DetalleVentaId implements Serializable {

    @Column(name = "venta_id")
    private Integer ventaId;

    @Column(name = "producto_id")
    private Integer productoId;

    // equals y hashCode generados automáticamente por Lombok (@Data)
}
