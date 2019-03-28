def adjacency_matrix

  all_pages = Page.all
  new_adjacency_matrix = []

  all_pages.each do |page|
    new_row = page.create_own_row(all_pages)
    new_adjacency_matrix << new_row
  end

  return new_adjacency_matrix

end
