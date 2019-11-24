class Scorecard < ApplicationRecord
  belongs_to :user
  belongs_to :game

  serialize :scores_per_turn, Array

  def self.create_for(players, game) 
    players.map do |params, i|
      Scorecard.create(params.merge({ user_id: game.user_id }))
    end

  end
end
