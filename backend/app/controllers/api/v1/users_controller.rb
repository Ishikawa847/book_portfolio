class Api::V1::UsersController < ApplicationController
  skip_before_action :authenticate_api_v1_user!, only: [:show]

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