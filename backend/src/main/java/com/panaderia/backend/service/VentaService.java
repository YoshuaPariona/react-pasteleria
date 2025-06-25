//src/main/java/com/panaderia/backend/service/VentaService.java
package com.panaderia.backend.service;

import com.panaderia.backend.dto.DetalleVentaDTO;
import com.panaderia.backend.dto.VentaDTO;
import com.panaderia.backend.model.DetalleVenta;
import com.panaderia.backend.model.DetalleVentaId;
import com.panaderia.backend.model.FormaEntrega;
import com.panaderia.backend.model.Producto;
import com.panaderia.backend.model.TipoPago;
import com.panaderia.backend.model.Venta;
import com.panaderia.backend.repository.ClienteRepository;
import com.panaderia.backend.repository.DetalleVentaRepository;
import com.panaderia.backend.repository.VentaRepository;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VentaService {

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private VentaRepository ventaRepository;

    @Autowired
    private DetalleVentaRepository detalleVentaRepository;

    public Venta guardarVenta(VentaDTO dto) {
        Venta venta = new Venta();
        venta.setCliente(clienteRepository.findById(dto.getCliente_id()).orElseThrow());
        venta.setTotal(dto.getTotal());
        venta.setNumeroComprobante(dto.getNumero_comprobante());
        venta.setTipoPago(TipoPago.fromString(dto.getTipo_pago()));
        venta.setFormaEntrega(FormaEntrega.fromString(dto.getForma_entrega()));
        venta.setFecha(LocalDateTime.now());

        Venta ventaGuardada = ventaRepository.save(venta);

        for (DetalleVentaDTO d : dto.getDetalle()) {
            DetalleVenta detalle = new DetalleVenta();

            // ID compuesto
            DetalleVentaId id = new DetalleVentaId();
            id.setVentaId(ventaGuardada.getId());
            id.setProductoId(d.getProducto_id());
            detalle.setId(id);

            // Relaciones
            detalle.setVenta(ventaGuardada);

            Producto producto = new Producto();
            producto.setId(d.getProducto_id());
            detalle.setProducto(producto);

            // Otros campos
            detalle.setCantidad(d.getCantidad());
            detalle.setPrecioUnitario(d.getPrecio_unitario());
            detalle.setDescripcion(d.getDescripcion());

            // Guardar
            detalleVentaRepository.save(detalle);
        }


        return ventaGuardada;
    }

}
