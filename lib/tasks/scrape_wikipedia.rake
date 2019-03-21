require 'wikipedia_scraper'


namespace :db do
  namespace :seed do

    desc 'Scrape Wikipedia'
    task :scrape_wikipedia => :environment do
      File.open("scrape_results.txt", "w+") do |page|
        spider = WikipediaScraper.new
        spider.results.lazy.take(5).each_with_index do |result, i|
          output_string = "%-3s: %s" % [i, result.inspect]
          puts output_string
          page.write(output_string)
          puts "===="
        end
      end
      puts "Hello"
    end
  end
end
