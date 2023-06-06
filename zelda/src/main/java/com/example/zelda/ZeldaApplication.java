package com.example.zelda;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication ()
public class ZeldaApplication {

	public static void main(String[] args) {
		SpringApplication.run(ZeldaApplication.class, args);
	}

}
