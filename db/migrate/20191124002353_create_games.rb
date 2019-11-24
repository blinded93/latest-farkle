class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.references :user, null: false, foreign_key: true
      t.boolean :in_progress, default: true
      t.string :winner
      t.string :current_player, default: 'player1'
      t.boolean :last_turn, default: false
      t.string :last_player

      t.timestamps
    end
  end
end
