/**
 *
 */
package com.siscopi.springapp.controladores;

/**
 * @author maricela
 *
 */

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
@Controller
public class HelloControler {
	protected final Log logger = LogFactory.getLog(getClass());

    @RequestMapping(value="/inicio.htm")
    public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        logger.info("Returning hello view");

        return new ModelAndView("hello.jsp");
    }
    @RequestMapping(value="/salir.htm")
    public ModelAndView otro(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        logger.info("Returning salir");

        return new ModelAndView("salir.jsp");
    }
}
