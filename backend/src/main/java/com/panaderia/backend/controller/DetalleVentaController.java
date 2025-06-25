package com.panaderia.backend.controller;

import com.panaderia.backend.model.DetalleVenta;
import com.panaderia.backend.model.DetalleVentaId;
import com.panaderia.backend.repository.DetalleVentaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/detalle-venta")
public class DetalleVentaController {

    @Autowired
    private DetalleVentaRepository detalleVentaRepository;

    @GetMapping
    public List<DetalleVenta> getAll() {
        return detalleVentaRepository.findAll();
    }

    @GetMapping("/{ventaId}/{productoId}")
    public Optional<DetalleVenta> getById(@PathVariable Integer ventaId, @PathVariable Integer productoId) {
        DetalleVentaId id = new DetalleVentaId(ventaId, productoId);
        return detalleVentaRepository.findById(id);
    }

    @GetMapping("/venta/{ventaId}")
    public List<DetalleVenta> getByVenta(@PathVariable Integer ventaId) {
        return detalleVentaRepository.findByVentaId(ventaId);
    }

    @PostMapping
    public DetalleVenta create(@RequestBody DetalleVenta detalleVenta) {
        return detalleVentaRepository.save(detalleVenta);
    }

    @PutMapping("/{ventaId}/{productoId}")
    public DetalleVenta update(@PathVariable Integer ventaId,
                               @PathVariable Integer productoId,
                               @RequestBody DetalleVenta detalleActualizado) {
        DetalleVentaId id = new DetalleVentaId(ventaId, productoId);
        return detalleVentaRepository.findById(id)
                .map(detalle -> {
                    detalle.setCantidad(detalleActualizado.getCantidad());
                    detalle.setPrecioUnitario(detalleActualizado.getPrecioUnitario());
                    detalle.setDescripcion(detalleActualizado.getDescripcion());
                    return detalleVentaRepository.save(detalle);
                })
                .orElseGet(() -> {
                    detalleActualizado.setId(id);
                    return detalleVentaRepository.save(detalleActualizado);
                });
    }

    @DeleteMapping("/{ventaId}/{productoId}")
    public void delete(@PathVariable Integer ventaId, @PathVariable Integer productoId) {
        DetalleVentaId id = new DetalleVentaId(ventaId, productoId);
        detalleVentaRepository.deleteById(id);
    }
}
