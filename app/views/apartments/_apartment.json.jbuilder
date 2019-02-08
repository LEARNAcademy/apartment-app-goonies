json.extract! apartment, :id, :address, :city, :zip_code, :state, :country, :user_id, :created_at, :updated_at
json.url apartment_url(apartment, format: :json)
