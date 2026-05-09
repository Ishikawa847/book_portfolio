class Api::V1::ReadingLogsController < ApplicationController
  before_action :authenticate_api_v1_user!

  def index
    reading_logs = current_api_v1_user
      .reading_logs
      .where(book_id: params[:book_id])
      .order(created_at: :desc)
    
    render json: reading_logs
  end

  def create
    reading_log = current_api_v1_user.reading_logs.new(reading_log_params)

    if reading_log.save
      render json: reading_log, status: :created
    else
      render json: {
        errors: reading_log.errors.full_messages
    }, status: :unprocessable_entity
    end
  end

  private

  def reading_log_params
    params.permit(
      :book_id,
      :memo,
      :read_on
    )
  end
end