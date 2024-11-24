package com.f5mongodbmc.f5_mongodb_masterclass.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.f5mongodbmc.f5_mongodb_masterclass.dto.UserDTO;
import com.f5mongodbmc.f5_mongodb_masterclass.model.User;
import com.f5mongodbmc.f5_mongodb_masterclass.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public User creteUser(@RequestBody UserDTO userDto) {
		try {
			User user = User.builder()
						.email(userDto.getEmail())
						.password(userDto.getPassword())
						.role(userDto.getRole())
						.build();
			User newUser = userRepository.save(user);
			return newUser;
		} catch(Exception e) {
			
		}
		return null;
	}
	
	public List<User> findAllUsers() {
		try {
			List<User> users = userRepository.findAll();
			
			return users;
		} catch(Exception e) {
			
		}
		return null;
	}
	
}
