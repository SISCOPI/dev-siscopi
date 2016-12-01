/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.controllers;

import com.datos.query;
import com.utils.SessionUtils;
import java.io.Serializable;
import javax.enterprise.context.SessionScoped;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.context.FacesContext;
import javax.servlet.http.HttpSession;
import org.primefaces.context.RequestContext;

/**
 *
 * @author Juanjo
 */
@ManagedBean (name="login")
@SessionScoped

public class loginController implements Serializable {
    private String nickname;
    private String password;
    private final query consulta = new query();

    public String getNikname() {
        return nickname;
    }

    public void setNikname(String nickname) {
        this.nickname = nickname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
    public String controlLogin(){
        if(consulta.controlLogin(nickname, password)){
            HttpSession session = SessionUtils.getSession();
            session.setAttribute("nickname",nickname);
            return "home";
        }
        RequestContext.getCurrentInstance().update("growl");
        FacesContext context = FacesContext.getCurrentInstance();
        context.addMessage(nickname, new FacesMessage(FacesMessage.SEVERITY_ERROR,"Error","Nombre de usuario o password incorrecto"));
        return "";
    }
}
