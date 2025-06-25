package com.panaderia.backend.controller;

import com.panaderia.backend.dto.VentaDTO;
import com.panaderia.backend.model.Venta;
import com.panaderia.backend.repository.VentaRepository;
import com.panaderia.backend.service.VentaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ventas")
public class VentaController {

    @Autowired
    private VentaRepository ventaRepository;

    @Autowired
    private VentaService ventaService;

    @GetMapping
    public List<Venta> listar() {
        return ventaRepository.findAll();
    }

    @GetMapping("/cliente/{clienteId}")
    public List<Venta> listarPorCliente(@PathVariable Integer clienteId) {
        return ventaRepository.findByClienteId(clienteId);
    }

    @PostMapping
    public ResponseEntity<Venta> crearVenta(@RequestBody VentaDTO ventaDTO) {
        Venta nuevaVenta = ventaService.guardarVenta(ventaDTO);
        return ResponseEntity.ok(nuevaVenta);
    }

    @GetMapping("/{id}")
    public Venta obtener(@PathVariable Integer id) {
        return ventaRepository.findById(id).orElse(null);
    }
}
