class GameSerializer < ActiveModel::Serializer
  attributes :id, :inProgress, :winner, :lastTurn, :currentPlayer, :lastPlayer
  has_many :scorecards

  def inProgress
    object.in_progress
  end

  def lastTurn
    object.last_turn
  end

  def currentPlayer
    object.current_player
  end

  def lastPlayer
    object.last_player
  end
end
