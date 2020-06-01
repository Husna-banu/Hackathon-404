package com.hackathon.hotel.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@Data
@NoArgsConstructor
@AllArgsConstructor
@EntityScan
public class AdminDTO {

    
	public AdminDTO(Long adminId, String adminName, String adminLastName, String adminPosition, Long adminSalary,
			Long adminAge) {
		super();
		this.adminId = adminId;
		this.adminName = adminName;
		this.adminLastName = adminLastName;
		this.adminPosition = adminPosition;
		this.adminSalary = adminSalary;
		this.adminAge = adminAge;
	}
	private Long adminId;
    public Long getAdminId() {
		return adminId;
	}
	public void setAdminId(Long adminId) {
		this.adminId = adminId;
	}
	public String getAdminName() {
		return adminName;
	}
	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}
	public String getAdminLastName() {
		return adminLastName;
	}
	public void setAdminLastName(String adminLastName) {
		this.adminLastName = adminLastName;
	}
	public String getAdminPosition() {
		return adminPosition;
	}
	public void setAdminPosition(String adminPosition) {
		this.adminPosition = adminPosition;
	}
	public Long getAdminSalary() {
		return adminSalary;
	}
	public void setAdminSalary(Long adminSalary) {
		this.adminSalary = adminSalary;
	}
	public Long getAdminAge() {
		return adminAge;
	}
	public void setAdminAge(Long adminAge) {
		this.adminAge = adminAge;
	}
	private String adminName;
    private String adminLastName;
    private String adminPosition;
    private Long adminSalary;
    private Long adminAge;
}
