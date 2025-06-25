package com.panaderia.backend.controller;

import com.panaderia.backend.model.Cliente;
import com.panaderia.backend.repository.ClienteRepository;
import com.panaderia.backend.dto.ClienteLoginDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/clientes")
public class ClienteController {

    @Autowired
    private ClienteRepository clienteRepository;

    @GetMapping
    public List<Cliente> listar() {
        return clienteRepository.findAll();
    }

    @PostMapping
    public Cliente guardar(@RequestBody Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    @GetMapping("/{id}")
    public Cliente obtener(@PathVariable Integer id) {
        return clienteRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Cliente actualizar(@PathVariable Integer id, @RequestBody Cliente cliente) {
        cliente.setId(id);
        return clienteRepository.save(cliente);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
        clienteRepository.deleteById(id);
    }

    // 🔐 Login de cliente
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody ClienteLoginDTO loginDTO) {
        Cliente cliente = clienteRepository.findByEmail(loginDTO.getEmail());

        if (cliente != null && cliente.getPassword().equals(loginDTO.getPassword())) {
            return ResponseEntity.ok(cliente); // Puedes devolver solo lo necesario
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                                 .body("Credenciales inválidas");
        }
    }
}
