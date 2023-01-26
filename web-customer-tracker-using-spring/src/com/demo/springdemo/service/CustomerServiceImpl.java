package com.demo.springdemo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demo.springdemo.dao.CustomerDao;
import com.demo.springdemo.entity.Customer;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerDao customerdao;
	
	@Transactional
	@Override
	public List<Customer> getCustomers() {
		
		return customerdao.getCustomers();
	}

	@Override
	@Transactional
	public void saveCustomer(Customer theCustomer) {
		
		customerdao.saveCustomer(theCustomer);
		
	}

	@Override
	@Transactional
	public Customer getCustomer(int theId) {
		
		return customerdao.getCustomer(theId);
	}

	@Override
	@Transactional
	public void deleteCustomer(int theId) {
		customerdao.deleteCustomer(theId);
		
	}
}
