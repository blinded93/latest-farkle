class JsonWebToken
  def self.encode(payload)
    exp = { exp: Time.now.to_i + 86400 }
    exp_payload = payload.merge(exp)
    puts Rails.application.secrets.secret_key_base
    JWT.encode(exp_payload, Rails.application.credentials.secret_key_base)
  end

  def self.decode(token)
    return HashWithIndifferentAccess.new(
      JWT.decode(token, Rails.application.credentials.secret_key_base)[0]
    )
  rescue
    nil
  end
end