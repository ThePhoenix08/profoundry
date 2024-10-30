//package com.swapnil.ProFoundry.service.impl;
//
//
//
//import com.swapnil.ProFoundry.model.Users;
//import com.swapnil.ProFoundry.repo.UserRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//@Service
//public class MobileService {
//

//
//    @Autowired
//    private UserRepo userRepo;
//
//    public String generateOtpAndSendOnMobile(Users users){
//        Users users1=userRepo.findByEmail(users.getEmail());
//        if(users1==null){
//            throw new RuntimeException("User Not Found");
//        }
//        String otp = String.valueOf((int) ((Math.random() * 900000) + 100000));
//        users1.setMobileOtp(otp);
//        userRepo.save(users1);
//
//        Twilio.init(Account_Sid, Auth_Token);
//        Message message=Message.creator(new PhoneNumber("+91"+users.getMobileNo()),
//                new PhoneNumber(""),
//                "Your otp for mobile verification is "+otp)
//                .create();
//
//        if(message.getErrorCode()==null){
//            return "Success";
//
//        }
//        return "error";
//    }
//}
