/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.datos;

import com.entity.Usuarios;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
        
/**
 *
 * @author Juanjo
 */
public class query {
    
    EntityManagerFactory emf;
    EntityManager em;
    
    public query(){
        emf = Persistence.createEntityManagerFactory("siscopiPU");
        em = emf.createEntityManager();
        em.getTransaction().begin();
        
    }
    
    public boolean controlLogin(String nickname, String password){
    
        try {
            Usuarios usuario = em.createNamedQuery("Usuarios.control",Usuarios.class).setParameter("nickname",nickname).setParameter("password",password).getSingleResult();
            if(usuario!=null){
                return true;
            }
            return false;
        } catch(Exception e){
            return false;
        } finally {
            emf.close();
        }
    
    }
    
}
