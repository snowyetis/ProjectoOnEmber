class ProjectDetailsSerializer < ActiveModel::Serializer
  attributes :id, :project_id, :user_id, :feature_name, :hours_billed, :available_hours, :amount
  belongs_to :project
  # belongs_to :user
end
