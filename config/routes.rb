Rails.application.routes.draw do
	resources :users
  resources :scorecards
  resources :games
  post '/auth_user' => 'authentication#authenticate_user'
  post '/verify_user' => 'authentication#verify_user'
end
