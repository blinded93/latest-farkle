class GamesController < ApplicationController
	before_action :authenticate_request!
  include Pagy::Backend

  def index
    pagy, games = pagy(Game.for(current_user.id), items: 10)

    render json: {
      games: games.map { |g| GameSerializer.new(g) },
      pagy: pagy
      }, status: 200
  end

  def create
    game = Game.create_with_scorecards(current_user, player_params)

    render json: game, status: 200
  end

  def update
    game = current_user.games.find_by(id: params[:id])
    game.update(game_params)

    render json: game, status: 200
  end

  def destroy
    game = current_user.games.find_by(id: (params[:id]))
    status = game ? 200 : 404

    render json: game.destroy, status: status
  end

  private
    def player_params
      keys = params.keys.select{|key| key.include?('player')}
      keys.map{|key| params.require(key.to_sym).permit(:name, :color)}
    end

    def game_params
      params.permit(:in_progress, :winner, :current_player, :last_turn, :last_player)
    end
end
