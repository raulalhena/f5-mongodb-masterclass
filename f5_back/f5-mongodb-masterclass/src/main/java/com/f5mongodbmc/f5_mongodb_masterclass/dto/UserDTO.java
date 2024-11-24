package com.f5mongodbmc.f5_mongodb_masterclass.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserDTO {
	private String id;
	private String email;
	private String password;
	private String role;
}
