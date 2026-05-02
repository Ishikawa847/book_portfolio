class Api::V1::UsersController < ApplicationController
  before_action :authenticate_api_v1_user!
  skip_before_action :authenticate_api_v1_user!, only: [:show]
  def show
    user = User.find(params[:id])

    render json: {
      id: user.id,
      name: user.name,
      email: user.email,
      books: user.books,
      avatar_url: avatar_url(user)
    }
  end
  
  def update
    user = current_api_v1_user

    user.update!(user_params)

    render json: {
      id: user.id,
      name: user.name,
      avatar_url: avatar_url(user)
    }
  end
  private

  def user_params
    params.permit(:name, :avatar)
  end

  def avatar_url(user)
    if user.avatar.attached?
      url_for(user.avatar)
    else
      "#{ENV['FRONTEND_ORIGIN']}/sample.jpg"
    end
  end

end