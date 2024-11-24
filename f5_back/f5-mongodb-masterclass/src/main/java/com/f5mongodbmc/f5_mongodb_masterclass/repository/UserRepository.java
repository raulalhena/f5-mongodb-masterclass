package com.f5mongodbmc.f5_mongodb_masterclass.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.f5mongodbmc.f5_mongodb_masterclass.model.User;

@Repository
public interface UserRepository extends MongoRepository<User, String>{

}
