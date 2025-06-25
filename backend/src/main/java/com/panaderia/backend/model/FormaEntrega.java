//src/main/java/com/panaderia/backend/model/FormaEntrega.java
package com.panaderia.backend.model;

public enum FormaEntrega {
    RECOJO, DELIVERY;

    public static FormaEntrega fromString(String value) {
        try {
            return FormaEntrega.valueOf(value.trim().toUpperCase());
        } catch (Exception e) {
            throw new IllegalArgumentException("Forma de entrega inválida: " + value);
        }
    }
}
