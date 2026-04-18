class Api::V1::BooksController < ApplicationController
  before_action :authenticate_api_v1_user!

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