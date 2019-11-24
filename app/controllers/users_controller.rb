class UsersController < ApplicationController
	def create
    user = User.new(user_params)
    
    if user.valid?
      user.save
      render json: user, status: 200
    else
      render json: user, status: 400
    end
  end
  
  private
    def user_params
      params.permit(:username, :email, :password)
    end
end
