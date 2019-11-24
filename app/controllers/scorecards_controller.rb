class ScorecardsController < ApplicationController
	before_action :authenticate_request!

  def update
    scorecard = Scorecard.find_by(id: params[:id])
    
    scorecard.score += params[:score].to_i
    scorecard.scores_per_turn << params[:score]
    scorecard.save
    scorecard.game.change_player(params, scorecard)

    render json: scorecard, status: 200
  end
end
