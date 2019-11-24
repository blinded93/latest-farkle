class JsonWebToken
  def self.encode(payload)
    exp = { exp: Time.now.to_i + 86400 }
    exp_payload = payload.merge(exp)
    puts Rails.application.secrets.secret_key_base
    JWT.encode(exp_payload, ENV['RAILS_MASTER_KEY'])
  end

  def self.decode(token)
    return HashWithIndifferentAccess.new(
      JWT.decode(token, ENV['RAILS_MASTER_KEY'])
    )
  rescue
    nil
  end
end