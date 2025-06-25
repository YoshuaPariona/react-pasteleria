// src/main/java/com/panaderia/backend/dto/VentaDTO.java
package com.panaderia.backend.dto;

import lombok.Data;
import java.util.List;

@Data
public class VentaDTO {
    private Integer cliente_id;
    private Double total;
    private String numero_comprobante;
    private String tipo_pago;
    private String forma_entrega;
    private List<DetalleVentaDTO> detalle;
}