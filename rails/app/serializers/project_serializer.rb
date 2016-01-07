class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :project_name, :status
  has_many :project_details
  # belongs_to :user
end
