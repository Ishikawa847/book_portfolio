class Api::V1::BooksController < ApplicationController
  before_action :authenticate_api_v1_user!, except: [:search]

  def index
    books = current_api_v1_user.books.order(created_at: :desc)
    render json: books
  end

  def create
    book = current_api_v1_user.books.new(book_params)

    if book.save
      render json: book, status: :created
    else
      render json: { errors: book.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def search
    keyword = params[:keyword]

    url = "https://www.googleapis.com/books/v1/volumes?q=#{CGI.escape(keyword)}&key=#{ENV['GOOGLE_BOOKS_API_KEY']}"
    response = Faraday.get(url)
    data = JSON.parse(response.body)
    puts response.body

    books = data["items"]&.map do |item|
      info = item["volumeInfo"]

      {
        google_books_id: item["id"],
        title: info["title"],
        author: info["authors"]&.join(", "),
        image_url: info.dig("imageLinks", "thumbnail")
      }
    end

    render json: books
  end

  private

  def book_params
    params.require(:book).permit(
      :title,
      :author,
      :image_url,
      :google_books_id
    )
  end
end