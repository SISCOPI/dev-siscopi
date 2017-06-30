package com.siscopi.beans.prueba;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Component;

@Component
public class BeanSpring {

    /**
     * Log de la clase.
     */
    private static final Logger LOGGER = Logger.getLogger(BeanSpring.class);

    @PostConstruct
    public void init() {
        LOGGER.info("EL BEAN HA INICIADO.");
    }

    /**
     * M&eacute;todo que retorna un mensaje de prueba.
     * @return
     */
    public String getMessage() {
        return "Este es un mensaje de prueba.";
    }

    @PreDestroy
    public void destroy() {
        LOGGER.info("EL BEAN ESTA A PUNTO DE SER DESTRUIDO.");
    }
}
