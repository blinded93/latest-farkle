Rails.application.routes.draw do
	resources :users
  resources :scorecards
  resources :games
  post '/auth_user' => 'authentication#authenticate_user'
  post '/verify_user' => 'authentication#verify_user'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
