class Api::V1::Auth::SessionsController < ApplicationController
  before_action :authenticate_api_v1_user!

  def index
    if current_api_v1_user
      render json: {
        is_login: true,
        data: {
          id: current_api_v1_user.id,
          name: current_api_v1_user.name,
          email: current_api_v1_user.email,
          avatar_url: avatar_url(current_api_v1_user)
        }
      }
    else
      render json: { is_login: false, message: "ユーザーが存在しません" }
    end
  end

  private

  def avatar_url(current_api_v1_user)
    if current_api_v1_user.avatar.attached?
      url_for(current_api_v1_user.avatar)
    else
      "#{ENV['FRONTEND_ORIGIN']}/sample.jpg"
    end
  end
end
