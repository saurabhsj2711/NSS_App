package com.raisoni.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.raisoni.dao.NSSDao;
import com.raisoni.model.Events;
import com.raisoni.model.Login;
import com.raisoni.model.Member;
import com.raisoni.model.NSS;
import com.raisoni.service.NSSService;

@Service
public class NSSServiceImpl implements NSSService {
	
	@Autowired
	NSSDao registerDB;

	@Override
	public void register(NSS getMember) {

		registerDB.register(getMember);
	}

	@Override
	public List<Member> getAllMembers() {
		
		return registerDB.getAllMembers();
	}

	@Override
	public List<Events> getAllEvents() {
		
		return registerDB.getAllEvents();	
		}

	@Override
	public int loginUser(Login member) {
		String s = ""+registerDB.loginUser(member);
		int i = 0;
		if(s.equals("null"))
		{
			return 0;
		}
		i = Integer.parseInt(s);
		return i;
		
		
	}

}
