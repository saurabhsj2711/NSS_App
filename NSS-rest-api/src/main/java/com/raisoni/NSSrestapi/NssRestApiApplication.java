package com.raisoni.NSSrestapi;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.raisoni")
@MapperScan("com.raisoni.dao")
public class NssRestApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(NssRestApiApplication.class, args);
	}

}
