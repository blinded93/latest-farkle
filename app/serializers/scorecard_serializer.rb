class ScorecardSerializer < ActiveModel::Serializer
  attributes :id, :score, :scores_per_turn, :name, :color
  has_one :user
  has_one :game
end
