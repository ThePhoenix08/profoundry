package com.swapnil.ProFoundry.service;


import com.swapnil.ProFoundry.model.Users;
import com.swapnil.ProFoundry.request.RegisterRequest;
import com.swapnil.ProFoundry.response.RegisterResponse;
import com.swapnil.ProFoundry.response.UserResponse;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {

    RegisterResponse register(RegisterRequest request);

    void verify(String email, String emailOtp);

    List<UserResponse> getAllUsers();

    Users login(String identifier, String password);

    void configure(HttpSecurity http) throws Exception;

    void processForgotPassword(String email);

    void resetPassword(String token, String newPassword);

    void updateTwoFactorAuth(String email, boolean enable2FA);
}
