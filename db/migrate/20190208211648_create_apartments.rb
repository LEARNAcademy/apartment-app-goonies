class CreateApartments < ActiveRecord::Migration[5.2]
  def change
    create_table :apartments do |t|
      t.string :address
      t.string :city
      t.integer :zip_code
      t.string :state
      t.string :country
      t.integer :user_id

      t.timestamps
    end
  end
end
