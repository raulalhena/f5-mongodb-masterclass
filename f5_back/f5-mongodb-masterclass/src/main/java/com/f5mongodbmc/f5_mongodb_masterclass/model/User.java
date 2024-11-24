package com.f5mongodbmc.f5_mongodb_masterclass.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Builder;
import lombok.Data;

@Document(value="users")
@Data
@Builder
public class User {
	@Id
	private String id;
	private String email;
	private String password;
	private String role;
}
