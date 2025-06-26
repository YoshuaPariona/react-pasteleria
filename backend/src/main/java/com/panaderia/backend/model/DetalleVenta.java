//backend/src/main/java/com/panaderia/backend/model/DetalleVenta.java
package com.panaderia.backend.model;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "detalle_venta")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class DetalleVenta {

    @EmbeddedId
    private DetalleVentaId id;

    @ManyToOne
    @MapsId("ventaId")
    @JoinColumn(name = "venta_id")
    private Venta venta;

    @ManyToOne
    @MapsId("productoId")
    @JoinColumn(name = "producto_id")
    private Producto producto;
    private Integer cantidad;

    @Column(name = "precio_unitario")
    private Double precioUnitario;
    private String descripcion;

    @Transient
    @JsonProperty("subtotal")
    public Double getSubtotal() {
        if (cantidad != null && precioUnitario != null) {
            return cantidad * precioUnitario;
        }
        return 0.0;
}
}
