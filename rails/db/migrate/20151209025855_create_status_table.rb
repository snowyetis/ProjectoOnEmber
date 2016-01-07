class CreateStatusTable < ActiveRecord::Migration
  def change
    create_table :status do |t|
      t.string :status_name,

      t.timestamps, null: false
    end
  end
end
