require 'test/unit'
require_relative './utils/driver'

include Test::Unit::Assertions
include ::Driver

step 'Add item <item> to the shopping basket.' do |item|
  driver.find_element(:link_text, item).click
  driver.find_element(:link_text, 'Add to Card').click
end

step 'Checkout now' do
  driver.find_element(:xpath, "//input[@value='Checkout Now!']").click
end
