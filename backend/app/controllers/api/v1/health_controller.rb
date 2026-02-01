module Api
  module V1
    class HealthController < ApplicationController
      def index
        render json: { status: 'ok', time: Time.current }
      end
    end
  end
end
