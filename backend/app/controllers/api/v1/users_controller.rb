class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user!
  skip_before_action :authenticate_user!, only: [:show]
  def show
    user = User.find(params[:id])

    render json: {
      id: user.id,
      name: user.name,
      email: user.email,
      books: user.books
    }
  end
end