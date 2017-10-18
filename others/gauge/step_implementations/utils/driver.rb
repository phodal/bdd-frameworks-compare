require 'selenium-webdriver'

# Driver module for selenium web driver
module Driver
  def driver
    @@driver
  end

  before_suite do
    # Set the "headless" env variable for running chrome headless
    # Check env/default/default.properties
    options = Selenium::WebDriver::Chrome::Options.new

    headless = 'N'
    # headless = ENV['headless'] || 'N'

    if(headless.downcase == 'y')
        options.add_argument('--headless')
        options.add_argument('--disable-gpu')
    end

    # Initialize driver from DriverFactory
    @@driver = Selenium::WebDriver.for :chrome, options: options
  end

  after_suite do
    # quit driver
    driver.quit
  end
end
