class Game < ApplicationRecord
  belongs_to :user
  has_many :scorecards, dependent: :destroy
  
  scope :for, -> (id) { where(user_id: id).order(id: :desc) }

  def self.create_with_scorecards(user, players)
    Game.create(user_id: user.id).tap do |game|
      game.scorecards = Scorecard.create_for(players, game)
      game.save
    end
  end

  def change_player(params, scorecard)
    next_player = params[:player] == 'player1' ? 'player2' : 'player1'

    self.update(current_player: next_player,
                          last_turn: scorecard.score >= 10000)
  end

  def unwin
    self.current_player = self.winner
    self.winner = nil
    self.in_progress = true
    self.last_turn = false
    index = self.current_player.match(/\d/)[0].to_i - 1
    sc = self.scorecards[index]

    sc.score -= sc.scores_per_turn.pop
    sc.save
    self.save
  end

  def removeLastTurn(playerNumber)
    index = playerNumber - 1
    sc = self.scorecards[index]

    sc.score -= sc.scores_per_turn.pop
    sc.save
  end
end
