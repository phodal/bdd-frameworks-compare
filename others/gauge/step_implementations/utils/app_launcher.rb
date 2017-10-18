require 'test/unit'
require_relative './driver'

include Test::Unit::Assertions
include ::Driver

step 'Go to the store website' do
  driver.navigate.to ENV['APP_URL']
  assert_equal 'The Active Admin Store', driver.title
end
