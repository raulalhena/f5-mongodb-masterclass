package com.f5mongodbmc.f5_mongodb_masterclass.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.f5mongodbmc.f5_mongodb_masterclass.dto.UserDTO;
import com.f5mongodbmc.f5_mongodb_masterclass.model.User;
import com.f5mongodbmc.f5_mongodb_masterclass.service.UserService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("users")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/create")
	@ResponseStatus(HttpStatus.CREATED)
	public User creteUser(@RequestBody UserDTO userDto) {
		return userService.creteUser(userDto);
	}
	
	@GetMapping("/")
	@ResponseStatus(HttpStatus.OK)
	public List<User> findAllUsers() {
		return userService.findAllUsers();
	}
}
