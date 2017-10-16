require 'test/unit'
require_relative './utils/driver'

include Test::Unit::Assertions
include ::Driver

step 'Log out the customer' do
    log_out();
end

step 'Clear previous login' do
  begin
    log_out()
  rescue StandardError
    print "no previously logged in Customers"
  end
end

step 'Give an option to Log Out' do
  logOut = driver.find_element(:link_text, 'Log out')
  assert_true logOut.displayed?
end

step 'Give an option to Log In' do
  logIn = driver.find_element(:link_text, 'Log in')
  assert_true logIn.displayed?
end

step 'Show the log in status for user <customer>' do |customer|
  auth = driver.find_element(:id, 'auth')
  assert_true auth.displayed?
end

def log_out
  driver.find_element(:link_text, 'Log out').click
end
