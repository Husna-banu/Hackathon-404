package com.hackathon.hotel.beans;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

	public User(String userid, String password, Long userTotalBalance) {
		super();
		this.userid = userid;
		this.password = password;
		this.userTotalBalance = userTotalBalance;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Long getUserTotalBalance() {
		return userTotalBalance;
	}
	public void setUserTotalBalance(Long userTotalBalance) {
		this.userTotalBalance = userTotalBalance;
	}
	private String userid;
    private String password;
    private Long userTotalBalance;

}
