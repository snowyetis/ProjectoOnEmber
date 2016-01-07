class CreateBaseTables < ActiveRecord::Migration
  def change
    
      create_table :dashboards do |t|
        t.belongs_to :user, index: true

        t.string :profile_name

        t.timestamps null: false
      end

      create_table :projects do |t|
        t.belongs_to :user, index: true

        t.string :project_name
        t.string :status

        t.timestamps null: false
      end

      create_table :project_details do |t|
        t.belongs_to :project, index: true
        t.belongs_to :user, index: true

        t.string :feature_name
        t.integer :available_hours
        t.integer :hours_billed
        t.decimal :amount

        t.timestamps null: false
      end

      create_table :invoices do |t|
        t.belongs_to :project, index: true
        t.belongs_to :project_detail, index: true

        t.string :customer_name
        t.string :project_name
        t.string :feature_name
        t.string :hours_billed

        t.timestamps null: false
      end
    end
  end
