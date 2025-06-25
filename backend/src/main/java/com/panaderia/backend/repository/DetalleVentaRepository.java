package com.panaderia.backend.repository;

import com.panaderia.backend.model.DetalleVenta;
import com.panaderia.backend.model.DetalleVentaId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DetalleVentaRepository extends JpaRepository<DetalleVenta, DetalleVentaId> {
    List<DetalleVenta> findByVentaId(Integer ventaId);
}
