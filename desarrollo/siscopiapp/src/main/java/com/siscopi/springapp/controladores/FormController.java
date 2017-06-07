package com.siscopi.springapp.controladores;


import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;
import javax.faces.bean.ViewScoped;
import javax.faces.context.FacesContext;
import javax.faces.event.ActionEvent;

import com.siscopi.beans.prueba.BeanSpring;

/**
 * Controlador para la ventana.
 * @author ManuelFrancisco
 */
@ViewScoped
@ManagedBean
public class FormController {

    /**
     * Bean Spring.
     */
    @ManagedProperty(value = "#{beanSpring}")
    private BeanSpring beanSpring;

    /**
     * Muestra un mensaje.
     * @param actionEvent
     */
    public void showMessage(ActionEvent actionEvent) {
        FacesContext.getCurrentInstance().addMessage(null,
            new FacesMessage(FacesMessage.SEVERITY_INFO, "Mensaje",
                beanSpring.getMessage()));
    }

    public BeanSpring getBeanSpring() {
        return beanSpring;
    }

    public void setBeanSpring(BeanSpring beanSpring) {
        this.beanSpring = beanSpring;
    }
}