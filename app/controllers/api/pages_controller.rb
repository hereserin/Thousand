class Api::PagesController < ApplicationController
  def index
    @pages = Pages.all
    render 'api/pages/index'
  end

end
