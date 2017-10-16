Gauge.configure do |config|
  # Return a screenshot byte array
  config.screengrabber = -> {
    driver.save_screenshot('/tmp/screenshot.png')
    return File.binread("/tmp/screenshot.png")
  }
end