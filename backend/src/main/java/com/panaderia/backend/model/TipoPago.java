//src/main/java/com/panaderia/backend/model/TipoPago.java
package com.panaderia.backend.model;

public enum TipoPago {
    EFECTIVO, TARJETA, YAPE, PLIN, OTRO;

    public static TipoPago fromString(String value) {
        try {
            return TipoPago.valueOf(value.trim().toUpperCase());
        } catch (Exception e) {
            throw new IllegalArgumentException("Tipo de pago inválido: " + value);
        }
    }
}
