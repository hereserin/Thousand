require 'page_rank'
require 'adjacency_matrix'

desc 'Calculate pagerank for all pages indexed'
task :rank_page_index => :environment do

  adj_matrix = adjacency_matrix
  pageranks = pagerank(adj_matrix, 0.001, 0.85)
  puts pageranks
end
