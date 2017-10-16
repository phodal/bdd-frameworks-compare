require 'test/unit'
require_relative './utils/driver'

include Test::Unit::Assertions
include ::Driver

step 'Sign up as <name> with email <email> and <password>' do |name,email,password|
  driver.find_element(:link_text, 'Sign up').click

  form = driver.find_element(:id, 'new_user')

  form.find_element(:name,"user[username]").send_keys(name);
  form.find_element(:name,"user[email]").send_keys(email);
  form.find_element(:name,"user[password]").send_keys(password);
  form.find_element(:name,"user[password_confirmation]").send_keys(password);
  form.find_element(:name,"commit").click;
end

step 'See items available for purchase.' do
    products = driver.find_elements(:class_name, 'product')
    assert_true products.count > 0
end
