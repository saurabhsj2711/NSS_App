package com.raisoni.dao;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.raisoni.model.Events;
import com.raisoni.model.Login;
import com.raisoni.model.Member;
import com.raisoni.model.NSS;

@Mapper
public interface NSSDao {
	
	@Insert("insert into register(name,email,password,contact,year,branch)values (#{name},#{email},#{password},#{contact},#{year},#{branch})")
	void register(NSS getMember);

    @Select("select name,email,contact,year,branch from register")
    List<Member> getAllMembers();

    @Select("select * from events")
	List<Events> getAllEvents();
    
    @Select("select id from register where email = #{email} and password=#{password}")
   	String loginUser(Login member);
}
