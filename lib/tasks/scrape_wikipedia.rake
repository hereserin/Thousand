namespace :db do
  namespace :seed do

    desc 'Say hello!'
    task :scrape_wikipedia => :environment do
      Dir.glob("#{Rails.root}/app/models/*.rb").each {|file| require file }
      puts "Hello"
    end
  end
end
