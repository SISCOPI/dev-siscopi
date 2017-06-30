package com.siscopi.springapp.controladores;

import java.io.Serializable;
import java.util.Map;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import javax.faces.bean.SessionScoped;
import javax.faces.bean.ViewScoped;
import javax.faces.context.FacesContext;

@ManagedBean(name="menu")
@SessionScoped
public class NavegaInicio implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
//	@ManagedProperty(value="#{navega}")
	private String itemBean;

	public String getItemBean() {
		return itemBean;
	}

//	public void setItemBean(String itemBean) {
//		this.itemBean = itemBean;
//		System.out.println("set itembean:"+this.itemBean);
//	}

	public String navega(){
		FacesContext fc = FacesContext.getCurrentInstance();
        Map<String, String> params = fc.getExternalContext().getRequestParameterMap();
        this.itemBean = params.get("item")+".xhtml";
		System.out.println("navega en:"+itemBean);
		
		return this.itemBean;
		
	}
}
