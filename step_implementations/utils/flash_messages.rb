require 'test/unit'
require_relative './driver'

include Test::Unit::Assertions
include ::Driver

step 'Show a message <message>' do |message|
  flash_notice = driver.find_element(:xpath, "//div[@id = 'flash_notice' and text() = '"+message+"']")
  assert_true flash_notice.displayed?
end
