package com.raisoni.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.raisoni.model.Events;
import com.raisoni.model.Login;
import com.raisoni.model.Member;
import com.raisoni.model.NSS;


public interface NSSService {

	void register(NSS getMember);
	List<Member> getAllMembers();
	List<Events> getAllEvents();
    int loginUser(Login member );
	
}
