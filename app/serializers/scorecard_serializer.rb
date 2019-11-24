class ScorecardSerializer < ActiveModel::Serializer
  attributes :id, :name, :color, :score, :scoresPerTurn

  def scoresPerTurn
    object.scores_per_turn
  end
end
