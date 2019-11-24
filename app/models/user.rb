class User < ApplicationRecord
	has_secure_password
  validates :username, :email, uniqueness: true, presence: true
  validates :password, length: { in: 8..25 }

  has_many :scorecards
  has_many :games, through: :scorecards

  def self.find_by_identifier(identifier)
    id_hash = identifier.include?("@") ? { email: identifier } : { username: identifier }
    User.find_by(id_hash)
  end
end
