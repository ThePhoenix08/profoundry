package com.swapnil.ProFoundry.controller;




import com.swapnil.ProFoundry.model.Users;
import com.swapnil.ProFoundry.request.RegisterRequest;
import com.swapnil.ProFoundry.response.LoginResponse;
import com.swapnil.ProFoundry.response.RegisterResponse;
import com.swapnil.ProFoundry.response.UserResponse;
import com.swapnil.ProFoundry.service.SessionService;
import com.swapnil.ProFoundry.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {


    private final UserService userService;
    private final SessionService sessionService;
    private final OAuth2AuthorizedClientService clientService;


    @PostMapping("/register")
    public ResponseEntity<RegisterResponse> register ( @Valid @RequestBody RegisterRequest registerRequest){
        RegisterResponse response=userService.register(registerRequest);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PostMapping("/2fa/setup")
    public ResponseEntity<String> setupTwoFactorAuth(@RequestParam String email, @RequestParam boolean enable2FA){

        try {
            userService.updateTwoFactorAuth(email, enable2FA);
            String message = enable2FA ? "Two-factor authentication enabled" : "Two-factor authentication disabled";

            return ResponseEntity.ok(message);
        }
        catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to update 2FA settings: "+e.getMessage());
        }

    }

    @PostMapping("/2fa/verify")
    public ResponseEntity<String> verifyUser(@RequestParam String email, String emailOtp){

        try{
            userService.verify(email, emailOtp);
            return new ResponseEntity<>("User verified Successfully", HttpStatus.OK);
        }
        catch(RuntimeException e){
            LoginResponse errorResponse = new LoginResponse(e.getMessage(), null); // Assuming you have a constructor for this
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestParam(required = false) String identifier, @RequestParam String password, HttpServletRequest request) {
        Users user = userService.login(identifier, password);
        if (user != null) {

            HttpSession session= request.getSession(true);
            sessionService.saveSessionData(session, user.getId());

            LoginResponse loginResponse=LoginResponse.builder()
                    .username(user.getUsername())
                    .email(user.getEmail())
                    .sessionId(session.getId())
                    .message("Login Successful")
                    .build();

            return ResponseEntity.ok(loginResponse); // Return user details or token
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username/email or password.");
        }
    }

    @PostMapping("/oauth/{provider}")
    public void authenticate(
            @PathVariable String provider,
            HttpServletResponse res
            ) throws IOException {
        String redirectUrl="/oauth2/authorization/"+ provider;

        res.sendRedirect(redirectUrl);

    }


    @PostMapping("/forgot-password")
    public ResponseEntity<String> forgotPassword(@RequestParam String email){
        userService.processForgotPassword(email);
        return ResponseEntity.ok("Password reset link has been sent to your email");
    }

    @PostMapping("/reset-password")
    public ResponseEntity<String> resetPassword(@RequestParam String token, @RequestParam String newPassword) {

        userService.resetPassword(token, newPassword);
        return ResponseEntity.ok("Password has been reset successfully");
    }

    @GetMapping("/users")
    public ResponseEntity<List<UserResponse>> getUsers() {
        List<UserResponse> users = userService.getAllUsers(); // Corrected method call
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

}









