package com.raisoni.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.raisoni.model.Events;
import com.raisoni.model.Login;
import com.raisoni.model.Member;
import com.raisoni.model.NSS;
import com.raisoni.service.NSSService;
import com.raisoni.serviceImpl.NSSServiceImpl;

@RestController
public class NSSController {
	
	@Autowired
	private NSSService nssService;
	
	@PostMapping("/NSS/register")
	void register(@RequestBody NSS getMember)
	{
		nssService.register(getMember);
	}

	@GetMapping("/NSS/getAllMembers")
	List<Member> getAllMembers()
	{
		return nssService.getAllMembers();
	}
	
	@GetMapping("/NSS/getAllEvents")
	List<Events> getAllEvents()
	{
		return nssService.getAllEvents();
	}
	
	@PostMapping("/NSS/login")
	int register(@RequestBody Login member)
	{
		return nssService.loginUser(member);
	}
}
