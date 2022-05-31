class V1::MessagesController < ApplicationController
  def index
    message = Message.order('RANDOM()').first
    render json: { messages: [greeting: message.content] }.to_json
  end
end
