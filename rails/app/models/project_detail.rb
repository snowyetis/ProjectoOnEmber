class ProjectDetail < ActiveRecord::Base
  belongs_to :project
  belongs_to :user

  :feature_name
  :project_id
  :available_hours
  :hours_billed
  :amount
  :user_id
end
