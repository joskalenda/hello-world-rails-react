class Message < ApplicationRecord
  def self.random_message
    random_id = rand(1..5)
    Message.find(random_id)
  end
end
