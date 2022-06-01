class Api::MessagesController < ApplicationController
  def index
    greeting = Message.all.sample(1)
    render json: { message: greeting }
  end
end
