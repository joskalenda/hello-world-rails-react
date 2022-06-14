class V1::MessagesController < ApplicationController
  def index
    @message = Message.random_message
    render json: { greetings: @message }.to_json
  end

  def create
    @message = Message.new(title: content)

    if @message.save
      render json: @message, status: :created, location: @message
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end
end
