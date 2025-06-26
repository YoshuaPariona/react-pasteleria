//backend/src/main/java/com/panaderia/backend/model/DetalleVentaId.java
package com.panaderia.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.*;

import java.io.Serializable;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor
public class DetalleVentaId implements Serializable {

    @Column(name = "venta_id")
    private Integer ventaId;

    @Column(name = "producto_id")
    private Integer productoId;

}
